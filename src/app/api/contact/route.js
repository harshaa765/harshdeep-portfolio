import { createTransport } from 'nodemailer';
import { SITE_NAME, CONTACT_EMAIL } from '../../../config/site';

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json(
      { status: 'error', error: 'Missing required fields.' },
      { status: 400 }
    );
  }

  try {
    const info = await transporter.sendMail({
      from: `${SITE_NAME} Portfolio <${process.env.EMAIL_USERNAME}>`,
      to: `${SITE_NAME} <${CONTACT_EMAIL}>`,
      replyTo: `${name} <${email}>`,
      subject: `Portfolio contact form — message from ${name}`,
      text: `New message from ${name} (${email}):\n\n${message}`,
      html: `
            <p>You have a new message from your portfolio contact form:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
    });

    return Response.json({ status: 'ok', messageId: info.messageId || null });
  } catch (err) {
    console.error('Contact form email failed:', err);
    return Response.json(
      { status: 'error', error: 'Failed to send message.' },
      { status: 500 }
    );
  }
}
