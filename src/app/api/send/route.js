import { NextResponse } from "next/server";
import { Resend } from "resend";
import { exec } from 'child_process';
import { promisify } from 'util';

// Initialize Resend with API key
const resend = new Resend('re_QxpZH5Z8_FNx1tbRUunL9L1ndPrnPj5Rd');
const execPromise = promisify(exec);

// Function to send email using curl as a fallback
async function sendEmailWithCurl(email, subject, message) {
  const htmlContent = `
    <h1>New Contact Form Submission</h1>
    <p><strong>From:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;
  
  const curlCommand = `curl -X POST 'https://api.resend.com/emails' \\
    -H 'Authorization: Bearer re_QxpZH5Z8_FNx1tbRUunL9L1ndPrnPj5Rd' \\
    -H 'Content-Type: application/json' \\
    -d '${JSON.stringify({
      from: "nilunilesh84@gmail.com",
      to: "tudunilesh3@gmail.com",
      subject: `WebUmul Studios Contact: ${subject}`,
      html: htmlContent,
      reply_to: email
    }).replace(/'/g, "\\'")}'`;
  
  try {
    const { stdout, stderr } = await execPromise(curlCommand);
    console.log('Curl response:', stdout);
    if (stderr) console.error('Curl stderr:', stderr);
    return JSON.parse(stdout);
  } catch (error) {
    console.error('Error with curl command:', error);
    throw error;
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
    
    let data;
    
    try {
      // Try with Resend SDK first
      data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tudunilesh3@gmail.com',
        subject: `WebUmul Studios Contact: ${subject}`,
        reply_to: email,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      console.log("Email sent successfully with Resend SDK:", data);
    } catch (resendError) {
      console.error("Error with Resend SDK, trying curl:", resendError);
      // If Resend SDK fails, try with curl
      data = await sendEmailWithCurl(email, subject, message);
      console.log("Email sent successfully with curl:", data);
    }
    
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
