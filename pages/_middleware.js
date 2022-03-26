import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secrete = process.env.SECRATE_KEY;

export default function middleware(req) {
  const { cookies } = req;

  const jwt = cookies.my_hash;

  const url = req.url;

  if (url.includes("/dashbord")) {
    if (jwt === undefined) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    try {
      verify(jwt, secrete);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  if (url.includes("/auth/login")) {
    if (jwt) {
      try {
        verify(jwt, secrete);
        return NextResponse.redirect(new URL("/dashbord", req.url));
      } catch (e) {}
    }
  }

  if (url.includes("/auth/register")) {
    if (jwt) {
      try {
        verify(jwt, secrete);
        return NextResponse.redirect("/dashbord");
      } catch (e) {}
    }
  }

  return NextResponse.next();
}
