
import nodemailer from 'nodemailer';

export async function POST(request: Request): Promise<Response> {
  const { to, name, email, subject, message } = await request.json();

  // Create a transporter using your email service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Diabetes Health" <${process.env.EMAIL_USERNAME}>`,
      to: to, // albaashe77@gmail.com
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Diabetes Health Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
