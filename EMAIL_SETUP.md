# Email Setup Guide for Contact Form

This guide will help you set up EmailJS to send emails from your contact form to your primary email address.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. **Important**: Use your secondary email address here as the sender

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note the Template ID

## Step 4: Get Your Credentials

1. **Service ID**: Found in Email Services section
2. **Template ID**: Found in Email Templates section  
3. **Public Key**: Found in Account > API Keys section

## Step 5: Update Your Code

Replace the placeholder values in `src/app/components/footer/footer.ts`:

```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',        // Replace with your actual Service ID
  'YOUR_TEMPLATE_ID',       // Replace with your actual Template ID
  {
    from_name: this.formData.name,
    from_email: this.formData.email,
    subject: this.formData.subject,
    message: this.formData.message,
    to_email: 'your-primary-email@example.com',     // Your primary email
    from_email_sender: 'your-secondary-email@example.com'  // Your secondary email
  },
  'YOUR_PUBLIC_KEY'         // Replace with your actual Public Key
);
```

## Step 6: Test Your Setup

1. Run your application: `npm start`
2. Fill out the contact form
3. Submit and check if you receive the email

## Alternative Solutions

### Option 2: Netlify Forms (if deploying to Netlify)
If you're deploying to Netlify, you can use their built-in form handling:

```html
<form name="contact" method="POST" data-netlify="true">
  <!-- your form fields -->
</form>
```

### Option 3: Formspree
Another popular service for handling forms:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a new form
3. Update your form action to the provided endpoint

### Option 4: Backend API
For more control, you could create a simple backend API using:
- Node.js + Express + Nodemailer
- Python + Flask + smtplib
- PHP + PHPMailer

## Security Notes

- Never expose your EmailJS private keys in client-side code
- The public key is safe to use in the frontend
- Consider rate limiting to prevent spam
- Validate form inputs on both client and server side

## Troubleshooting

1. **Emails not sending**: Check browser console for errors
2. **Service not found**: Verify your Service ID is correct
3. **Template not found**: Verify your Template ID is correct
4. **Authentication failed**: Re-authenticate your email service

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 5 email templates

For higher limits, consider upgrading to a paid plan. 