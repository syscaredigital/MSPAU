const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('📧 Email Service - Checking configuration...');
console.log('📧 EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
console.log('📧 EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');
console.log('📧 EMAIL_TO:', process.env.EMAIL_TO);

// Create transporter
const createTransporter = () => {
  try {
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    console.log('✅ Transporter created successfully');
    return transporter;
  } catch (error) {
    console.error('❌ Error creating transporter:', error);
    throw error;
  }
};

// Email template
const createEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #103d5d; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #ddd; }
        .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #103d5d; }
        .label { font-weight: bold; color: #103d5d; }
        .value { margin-top: 5px; color: #333; }
        .footer { margin-top: 20px; text-align: center; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
          <p>SysCare IT Solutions</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${formData.name}</div>
          </div>
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${formData.email}</div>
          </div>
          <div class="field">
            <div class="label">📞 Phone:</div>
            <div class="value">${formData.phone || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">🛠️ Service Interested In:</div>
            <div class="value">${formData.service || 'Not specified'}</div>
          </div>
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">${formData.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>This email was sent from your website contact form.</p>
          <p>🕒 Submitted at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send contact form email
const sendContactEmail = async (formData) => {
  try {
    console.log('📧 Starting email send process...');
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Email credentials not configured');
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'digital@syscare.com.au',
      subject: `🚀 New Contact: ${formData.name} - ${formData.service || 'General Inquiry'}`,
      html: createEmailTemplate(formData)
    };

    console.log('📧 Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);
    return result;
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    console.error('❌ Full error:', error);
    
    // If it's an authentication error, provide more specific guidance
    if (error.code === 'EAUTH') {
      console.error('❌ Email authentication failed. Please check:');
      console.error('   1. EMAIL_USER and EMAIL_PASS in .env file');
      console.error('   2. Gmail App Password is correct');
      console.error('   3. 2-factor authentication is enabled');
    }
    
    throw error;
  }
};

module.exports = { sendContactEmail };