import { auth } from "@clerk/nextjs/server";

export default async function AuthComponent() {
  const { userId } = auth();
  return { userId };
}
