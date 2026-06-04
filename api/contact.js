import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"SwiftBill Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[SwiftBill] ${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 560px;">
          <h2 style="color: #1a1a1a; margin-bottom: 16px;">New message from SwiftBill website</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #666; width: 80px;">Name</td><td style="padding: 8px 0; color: #1a1a1a; font-weight: 500;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Subject</td><td style="padding: 8px 0; color: #1a1a1a; font-weight: 500;">${subject}</td></tr>
          </table>
          <div style="padding: 16px; background: #f5f5f5; border-radius: 8px; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return res
      .status(500)
      .json({ error: 'Failed to send message. Please try again later.' });
  }
}
