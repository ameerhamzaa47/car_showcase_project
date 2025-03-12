import { NextRequest, NextResponse } from "next/server"

export default function middelware(request:NextRequest) {
                return NextResponse.redirect(new URL("/SignIn",request.url))
}

export const config = {
        matcher:"/AddBlog/:path*"
}