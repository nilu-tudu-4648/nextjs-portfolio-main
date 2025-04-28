import { NextResponse } from "next/server";
import { Resend } from "resend";

// Create a dummy Resend instance for build time
// This prevents build errors when environment variables are not available
let resend;
let fromEmail;

// Only initialize with real values at runtime, not during build
if (typeof window === 'undefined') {
  // Server-side code
  try {
    // Use a placeholder during build time
    const apiKey = process.env.RESEND_API_KEY || "re_placeholder_for_build";
    resend = new Resend(apiKey);
    fromEmail = process.env.FROM_EMAIL || "hello@webcraftstudios.com";
  } catch (error) {
    console.warn("Failed to initialize Resend:", error);
    // Provide fallbacks to prevent build failures
    resend = {
      emails: {
        send: async () => ({ id: "build-time-placeholder", message: "No email sent during build" })
      }
    };
    fromEmail = "build-time@example.com";
  }
}

export async function POST(req) {
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
    
    // Check if we're in a real runtime environment with proper API key
    if (!process.env.RESEND_API_KEY) {
      console.warn("Missing Resend API key. Emails will not be sent.");
      return NextResponse.json(
        { 
          id: "missing-api-key",
          message: "Email sending is disabled: Missing API key" 
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
