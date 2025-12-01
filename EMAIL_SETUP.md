# Email Setup Instructions

To receive contact form submissions to your email (selvaprakashv007@gmail.com), you need to set up Gmail App Password.

## Steps to Configure:

### 1. Enable 2-Factor Authentication on Gmail
- Go to your Google Account: https://myaccount.google.com/
- Navigate to Security
- Enable 2-Step Verification

### 2. Generate App Password
- Go to: https://myaccount.google.com/apppasswords
- Select "Mail" as the app
- Select "Other (Custom name)" as the device
- Enter "Portfolio Contact Form"
- Click "Generate"
- Copy the 16-character password (it will look like: xxxx xxxx xxxx xxxx)

### 3. Update .env File
Open the `.env` file in the root directory and update:

```
EMAIL_APP_PASSWORD=your_16_character_app_password_here
```

Replace `your_16_character_app_password_here` with the password you generated (remove spaces).

Example:
```
EMAIL_APP_PASSWORD=abcdabcdabcdabcd
```

### 4. Restart the Server
After updating the .env file, restart your server:

```bash
npm run server
```

## Testing

1. Go to your portfolio contact form
2. Fill in the form with test data
3. Submit the form
4. Check selvaprakashv007@gmail.com for the email

## Email Features

The contact form will send you:
- Sender's name
- Sender's email address
- Message content
- Timestamp
- Beautifully formatted HTML email with your portfolio branding

## Troubleshooting

If emails are not being received:

1. **Check .env file**: Make sure EMAIL_APP_PASSWORD is set correctly
2. **Check Gmail spam folder**: Sometimes emails might be filtered
3. **Check server logs**: Look for error messages in the terminal
4. **Verify App Password**: Make sure you're using the App Password, not your regular Gmail password
5. **Check 2FA**: Ensure 2-Step Verification is enabled on your Google account

## Security Notes

- Never commit your .env file to Git (it's already in .gitignore)
- Never share your App Password publicly
- The App Password is different from your Gmail password
- You can revoke App Passwords anytime from your Google Account settings
