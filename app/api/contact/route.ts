import nodemailer from "nodemailer"

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  if (!email || !email.includes("@")) {
    return new Response(
      JSON.stringify({ error: "Invalid email" }),
      { status: 400 }
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // ✅ Email to YOU (notification)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    // ✅ Auto-Reply Email to USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting me!",
      text: `
Hi ${name},

Thank you for reaching out! 😊

I have received your message and will get back to you soon.

Best regards,
Gargi Vanjara
      `,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Email failed" }),
      { status: 500 }
    )
  }
}