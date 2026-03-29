import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // Validate input
    const validatedData = contactSchema.parse(data);

    // Configure Brevo SMTP transporter
    const transporter = nodemailer.createTransport({
      host: import.meta.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
      port: parseInt(import.meta.env.BREVO_SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: import.meta.env.BREVO_SMTP_USER,
        pass: import.meta.env.BREVO_SMTP_PASSWORD,
      },
      tls: {
        // Allow self-signed certificates in development (Laragon)
        rejectUnauthorized: false,
      },
    });

    // Configure email
    const mailOptions = {
      from: `"Portfolio Contact" <${import.meta.env.BREVO_FROM_EMAIL}>`,
      to: 'solucwebs@gmail.com',
      replyTo: validatedData.email,
      subject: `New Contact from Portfolio: ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
              .value { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #667eea; }
              .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Contact Message</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name:</div>
                  <div class="value">${validatedData.name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">💬 Message:</div>
                  <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from your portfolio contact form</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Message from Portfolio

Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent successfully!',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: error.errors[0].message,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to send message. Please try again later.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};

export const prerender = false;
