import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Ensure the x-forwarded-host header matches the custom domain
  const forwardedHost = request.headers.get("x-forwarded-host");
  const origin = request.headers.get("origin");

  if (forwardedHost && forwardedHost !== "owa.creativhouse.ru") {
    url.host = "owa.creativhouse.ru";
    return NextResponse.rewrite(url);
  }

  if (origin && origin !== "owa.creativhouse.ru") {
    url.host = "owa.creativhouse.ru";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
