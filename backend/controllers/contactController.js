const Contact = require('../models/Contact');
const transporter = require('../config/emailConfig');

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create contact and send email
exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  try {
    const newContact = await contact.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission from ${req.body.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
          <div style="background: linear-gradient(135deg, #5ce1e6, #4fd1c5); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">📧 New Contact Form Submission</h1>
          </div>
          
          <div style="background: #fff; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #333; border-bottom: 2px solid #5ce1e6; padding-bottom: 10px;">Contact Details</h2>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #5ce1e6; display: inline-block; width: 100px;">Name:</strong>
              <span style="color: #333;">${req.body.name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #5ce1e6; display: inline-block; width: 100px;">Email:</strong>
              <span style="color: #333;">${req.body.email}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #5ce1e6; display: inline-block; width: 100px;">Date:</strong>
              <span style="color: #333;">${new Date().toLocaleString()}</span>
            </div>
            
            <div style="margin-top: 25px;">
              <h3 style="color: #333; border-bottom: 2px solid #5ce1e6; padding-bottom: 10px;">Message</h3>
              <p style="color: #555; line-height: 1.6; background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #5ce1e6;">
                ${req.body.message}
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
              <p>This email was sent from your portfolio contact form</p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${req.body.name}
        Email: ${req.body.email}
        Date: ${new Date().toLocaleString()}
        
        Message:
        ${req.body.message}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('❌ Email not sent - Error:', error.message);
      } else {
        console.log('✅ Email sent successfully to selvaprakashv007@gmail.com');
        console.log('📧 Email ID:', info.messageId);
      }
    });

    res.status(201).json({ 
      message: 'Message sent successfully! I will get back to you soon.',
      contact: newContact 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mark as read
exports.markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete contact
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
