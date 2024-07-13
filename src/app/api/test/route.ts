import { NextResponse } from "next/server";

export function GET () {
    const r = new NextResponse('<h1>hello</h1>', { status: 200 })
    r.headers.set('content-type','text/html')
    
    return r
}