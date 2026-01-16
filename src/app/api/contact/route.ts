import { NextRequest, NextResponse } from 'next/server'

// Simple rate limiting (in production, use a proper rate limiting library)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 }) // 1 hour window
    return true
  }

  if (limit.count >= 5) {
    // Max 5 submissions per hour
    return false
  }

  limit.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const body = await request.json()

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true }) // Silent fail for bots
    }

    // Validate required fields
    if (!body.name || !body.email || !body.message || !body.interest || body.interest.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In production, send email here (e.g., using Resend, SendGrid, or Nodemailer)
    // For now, we'll just log it
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      interest: body.interest,
      tutorRequest: body.tutorRequest,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Replace with actual email sending
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@eurobactutors.com',
    //   to: 'info@eurobactutors.com',
    //   subject: `New contact form submission from ${body.name}`,
    //   html: `...`,
    // })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


