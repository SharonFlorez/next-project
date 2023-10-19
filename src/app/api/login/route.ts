import { LoginDTO } from "@/DTO/LoginDTO";

const user = {
  email: "user@lumni.net",
  password: "12345678",
};

export async function POST(request: Request) {
  const r: LoginDTO = await request.json();

  const success: boolean =
    user.email === r.email && user.password === r.password;

  const status = success ? 200 : 401;

  return Response.json({ success }, { status });
}
