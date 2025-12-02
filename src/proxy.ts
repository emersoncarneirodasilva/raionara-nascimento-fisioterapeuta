import { type NextRequest, NextResponse } from "next/server";

export const proxy = (request: NextRequest) => {
  const token = request.cookies.get("user_token")?.value;

  const protectedRoutes = ["/perfil"];
  const { pathname } = request.nextUrl;

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !token) {
    const url = new URL("/login", request.url);
    url.searchParams.set("error", "Você precisa estar logado.");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

// Configuração de matching igual ao middleware antigo
export const config = {
  matcher: ["/perfil/:path*"],
};
