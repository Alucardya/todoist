// File path: middleware.ts

import { authMiddleware } from "@clerk/nextjs/server";

console.log("Initializing Clerk Middleware");

export default authMiddleware({});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
