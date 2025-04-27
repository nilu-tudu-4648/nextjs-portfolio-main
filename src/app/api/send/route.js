import { NextResponse } from "next/server";
import { Resend } from "resend";

// Check if API key exists, otherwise use a placeholder for development
const resendApiKey = process.env.RESEND_API_KEY || "re_placeholder_key";
const resend = new Resend(resendApiKey);

// Default from email if environment variable is not set
const fromEmail = process.env.FROM_EMAIL || "hello@webcraftstudios.com";

export async function POST(req, res) {
  try {
    // Parse the request body
    const { email, subject, message } = await req.json();
    console.log("Form submission:", email, subject);

    // Check if required fields are present
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required" },
        { status: 400 }
      );
    }

    // Check if API key is properly set
    if (resendApiKey === "re_placeholder_key") {
      console.warn("Using placeholder Resend API key. Emails will not be sent.");
      // Return success response in development to allow testing without API key
      return NextResponse.json(
        {
          id: "dev-mode-no-email-sent",
          message: "Development mode: No email sent"
        }
      );
    }

    // Send the email
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail],
      reply_to: email,
      subject: `WebCraft Studios Contact: ${subject}`,
      react: (
        <>
          <h1>New Contact Form Submission</h1>
          <p><strong>From:</strong> {email}</p>
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
