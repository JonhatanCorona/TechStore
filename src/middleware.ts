import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname, origin } = request.nextUrl;

    if (
        (pathname === "/myAccount/myProfile" ||
        pathname === "/shoppingCart" ||
        pathname === "/myAccount/myOrders") &&
        !request.cookies.get("loginUser")?.value
    ) {
        const loginURL = new NextURL("/singIn", origin);
        return NextResponse.redirect(loginURL);
    }

    return NextResponse.next();
}

