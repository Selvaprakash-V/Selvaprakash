import React, { useCallback, useEffect, useRef, useState } from 'react';
import './ImageSwiper.css';

const SWIPE_THRESHOLD = 50;
const SWAP_DURATION_MS = 300;
const STACK_PADDING = 14;

const ImageSwiper = ({ images = [], cardWidth = 340, cardHeight = 460, className = '', onActiveChange }) => {
  const cardStackRef = useRef(null);
  const isSwiping = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const animationFrameId = useRef(null);

  const [cardOrder, setCardOrder] = useState(() =>
    Array.from({ length: images.length }, (_, index) => index)
  );

  const imagesKey = images.join('||');

  useEffect(() => {
    setCardOrder(Array.from({ length: images.length }, (_, index) => index));
  }, [images.length, imagesKey]);

  const getCards = useCallback(() => {
    if (!cardStackRef.current) return [];
    return Array.from(cardStackRef.current.querySelectorAll('.image-swiper-card'));
  }, []);

  const getActiveCard = useCallback(() => {
    const cards = getCards();
    return cards[0] || null;
  }, [getCards]);

  const updatePositions = useCallback(() => {
    const cards = getCards();
    cards.forEach((card, index) => {
      card.style.setProperty('--i', String(index + 1));
      card.style.setProperty('--swipe-x', '0px');
      card.style.setProperty('--swipe-rotate', '0deg');
      card.style.opacity = '1';
    });
  }, [getCards]);

  const applySwipeStyles = useCallback(
    (deltaX) => {
      const card = getActiveCard();
      if (!card) return;
      card.style.setProperty('--swipe-x', `${deltaX}px`);
      card.style.setProperty('--swipe-rotate', `${deltaX * 0.18}deg`);
      card.style.opacity = String(1 - Math.min(Math.abs(deltaX) / 110, 1) * 0.7);
    },
    [getActiveCard]
  );

  const handleStart = useCallback(
    (clientX) => {
      if (isSwiping.current) return;
      isSwiping.current = true;
      startX.current = clientX;
      currentX.current = clientX;
      const card = getActiveCard();
      if (card) card.style.transition = 'none';
    },
    [getActiveCard]
  );

  const handleEnd = useCallback(() => {
    if (!isSwiping.current) return;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }

    const deltaX = currentX.current - startX.current;
    const card = getActiveCard();
    if (card) {
      card.style.transition = `transform ${SWAP_DURATION_MS}ms ease, opacity ${SWAP_DURATION_MS}ms ease`;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        const direction = Math.sign(deltaX);
        card.style.setProperty('--swipe-x', `${direction * 360}px`);
        card.style.setProperty('--swipe-rotate', `${direction * 18}deg`);
        setTimeout(() => {
          setCardOrder((prev) => {
            if (!prev.length) return prev;
            return [...prev.slice(1), prev[0]];
          });
        }, SWAP_DURATION_MS);
      } else {
        applySwipeStyles(0);
      }
    }

    isSwiping.current = false;
    startX.current = 0;
    currentX.current = 0;
  }, [applySwipeStyles, getActiveCard]);

  const handleMove = useCallback(
    (clientX) => {
      if (!isSwiping.current) return;
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(() => {
        currentX.current = clientX;
        const deltaX = currentX.current - startX.current;
        applySwipeStyles(deltaX);
        if (Math.abs(deltaX) > SWIPE_THRESHOLD) handleEnd();
      });
    },
    [applySwipeStyles, handleEnd]
  );

  useEffect(() => {
    const element = cardStackRef.current;
    if (!element) return undefined;

    const pointerDown = (event) => handleStart(event.clientX);
    const pointerMove = (event) => handleMove(event.clientX);
    const pointerUp = () => handleEnd();

    element.addEventListener('pointerdown', pointerDown);
    element.addEventListener('pointermove', pointerMove);
    element.addEventListener('pointerup', pointerUp);
    element.addEventListener('pointercancel', pointerUp);
    element.addEventListener('pointerleave', pointerUp);

    return () => {
      element.removeEventListener('pointerdown', pointerDown);
      element.removeEventListener('pointermove', pointerMove);
      element.removeEventListener('pointerup', pointerUp);
      element.removeEventListener('pointercancel', pointerUp);
      element.removeEventListener('pointerleave', pointerUp);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [handleEnd, handleMove, handleStart]);

  useEffect(() => {
    updatePositions();
    if (onActiveChange && cardOrder.length) onActiveChange(cardOrder[0]);
  }, [cardOrder, onActiveChange, updatePositions]);

  if (!images.length) return null;

  return (
    <section
      ref={cardStackRef}
      className={`image-swiper ${className}`}
      style={{
        width: cardWidth + STACK_PADDING,
        height: cardHeight + STACK_PADDING,
      }}
    >
      {cardOrder.map((originalIndex, displayIndex) => (
        <article
          key={`${images[originalIndex]}-${originalIndex}`}
          className="image-swiper-card"
          style={{
            '--i': String(displayIndex + 1),
            zIndex: images.length - displayIndex,
            width: cardWidth,
            height: cardHeight,
          }}
        >
          <img
            src={images[originalIndex]}
            alt={`Certificate ${originalIndex + 1}`}
            className="image-swiper-img"
            draggable={false}
          />
        </article>
      ))}
    </section>
  );
};

export default ImageSwiper;