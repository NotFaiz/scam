import { NextResponse } from 'next/server'

export function middleware(request) {
  const basicAuth = request.headers.get('authorization')

  const auth = 'Basic ' + btoa('yourusername:yourpassword')

  if (basicAuth === auth) {
    return NextResponse.next()
  }

  return new Response('auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
