import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("user_token");

  return Response.json({
    authenticated: !!token,
  });
}
