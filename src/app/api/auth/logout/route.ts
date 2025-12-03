import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Remove o token (ajuste o nome se o seu cookie for outro)
  response.cookies.set("user_token", "", {
    httpOnly: true,
    secure: true,
    path: "/",
    expires: new Date(0), // expira imediatamente
  });

  return response;
}
