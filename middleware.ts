// File path: middleware.ts

<<<<<<< Updated upstream
import { clerkMiddleware } from '@clerk/nextjs/server'; // Ensure this is the correct import
=======
import { authMiddleware } from "@clerk/nextjs/server";
>>>>>>> Stashed changes

console.log("Initializing Clerk Middleware");

export default authMiddleware({});

<<<<<<< Updated upstream
export default clerkMiddleware({
  publicRoutes: ["/"],
});

=======
>>>>>>> Stashed changes
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
