# Google Maps API Setup Guide

## Getting Your Google Maps API Key

To display the dynamic location map, you need a Google Maps API key. Follow these steps:

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Click on the project dropdown at the top
4. Click **"New Project"**
5. Enter a project name (e.g., "Portfolio Map")
6. Click **"Create"**

### Step 2: Enable Maps JavaScript API

1. In your new project, go to **"APIs & Services"** > **"Library"**
2. Search for **"Maps JavaScript API"**
3. Click on it and press **"Enable"**

### Step 3: Create API Key

1. Go to **"APIs & Services"** > **"Credentials"**
2. Click **"Create Credentials"** > **"API Key"**
3. Your API key will be created and displayed
4. Copy the API key

### Step 4: Secure Your API Key (Recommended)

1. Click on your newly created API key to edit it
2. Under **"Application restrictions"**, select **"HTTP referrers"**
3. Add your website domains:
   - `localhost:3000` (for development)
   - `yourdomain.com` (for production)
4. Under **"API restrictions"**, select **"Restrict key"**
5. Select **"Maps JavaScript API"**
6. Click **"Save"**

### Step 5: Add API Key to Your Project

1. Open `client/src/components/LocationMap/LocationMap.js`
2. Find the line:
   ```javascript
   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE`;
   ```
3. Replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1234567890abcdefghijklmnopqrstuv`;
   ```

## Alternative: Using Environment Variables (More Secure)

### Option 1: Create .env file in client folder

1. Create a new file `client/.env`:
   ```
   REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
   ```

2. Update `LocationMap.js`:
   ```javascript
   script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
   ```

3. Add to `client/.gitignore`:
   ```
   .env
   .env.local
   ```

4. Restart your development server after adding the .env file

## Your Location Details

- **Plus Code**: R3F6+XG7
- **Location**: Kondampatty, Tamil Nadu
- **Coordinates**: 
  - Latitude: 11.024375
  - Longitude: 77.461250
- **Map Zoom Level**: 14 (shows neighborhood clearly)

## Customization Options

You can customize the map in `LocationMap.js`:

### Change Zoom Level
```javascript
zoom: 14,  // Change this value (1-20)
// 1 = World view
// 5 = Continent
// 10 = City
// 15 = Streets
// 20 = Buildings
```

### Map Type
```javascript
mapTypeId: 'roadmap',  // Options: 'roadmap', 'satellite', 'hybrid', 'terrain'
```

### Marker Animation
```javascript
animation: window.google.maps.Animation.BOUNCE,  // or BOUNCE instead of DROP
```

## Pricing Information

Google Maps offers a **$200 monthly credit** which covers:
- ~28,000 map loads per month
- Free for most personal portfolio websites
- Only charged if you exceed the free tier

## Testing

After setup:
1. Restart your React development server
2. Navigate to the Contact section
3. The map should load with a marker at your location
4. Click the marker to see location details
5. Use "Get Directions" button to open Google Maps

## Troubleshooting

**Map not loading?**
- Check browser console for errors
- Verify API key is correct
- Ensure Maps JavaScript API is enabled in Google Cloud Console
- Check if API key restrictions allow your domain

**"This page can't load Google Maps correctly"**
- API key might be restricted incorrectly
- Billing might need to be enabled in Google Cloud Console

**Marker in wrong location?**
- Verify coordinates in `LocationMap.js`
- Plus Code R3F6+XG7 converts to lat: 11.024375, lng: 77.461250

## Support

For Google Maps API issues, visit:
- [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript)
- [Google Maps Platform Support](https://developers.google.com/maps/support)
