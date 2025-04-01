import { NextResponse } from 'next/server'
import {parse} from "cookie"
import {jwtVerify} from "jose";

async function verifyJWT(token, secret){
    try{
        await jwtVerify(token, secret);
    } catch(e) {
        await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/logout`)
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/login`)
    }
}

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const isPublicPath = pathname === '/login' || pathname === '/signup'
    // const isAdminPath = pathname === '/admin' || pathname === '/admin/(.*)'
    
    // Extract token from cookies
    const cookies = request.headers.get('cookie') ? parse(request.headers.get('cookie')) : {};
    const token = cookies.token || null;
    
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);


    if(isPublicPath && token){
        verifyJWT(token, secret)
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/`)
    }
    else if(isPublicPath){
        NextResponse.next()
    }
    else if(!isPublicPath && !token){
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/login`)
    }
    else if(!isPublicPath && token){
        verifyJWT(token, secret)
        return NextResponse.next();
    }
    
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/login',
    '/signup',
    '/orders',
    '/order',
    '/myaccount',
    '/admin',
    '/admin/(.*)',
    '/checkout'
  ]
}