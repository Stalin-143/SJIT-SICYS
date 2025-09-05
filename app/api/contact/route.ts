export async function POST(req: Request) {
  try {
    const { name, email, subject, message, company } = await req.json()

    // honeypot
    if (typeof company === "string" && company.trim() !== "") {
      return new Response(null, { status: 204 })
    }

    if (typeof name !== "string" || name.trim().length < 2) {
      return Response.json({ error: "Invalid name" }, { status: 400 })
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email" }, { status: 400 })
    }
    if (typeof message !== "string" || message.trim().length < 10) {
      return Response.json({ error: "Message too short" }, { status: 400 })
    }

    const entry = {
      name: name.trim(),
      email: email.trim(),
      subject: typeof subject === "string" && subject.trim() ? subject.trim() : "Contact Form",
      message: message.trim(),
      at: new Date().toISOString(),
      ua: (typeof (req as any).headers?.get === "function" ? (req as any).headers.get("user-agent") : undefined) || "",
    }

    // For now, just log. You can wire email or DB later.
    console.log("[v0][contact] submission:", entry)

    return Response.json({ ok: true })
  } catch (e) {
    return Response.json({ error: "Bad request" }, { status: 400 })
  }
}
