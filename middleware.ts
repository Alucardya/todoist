// File path: middleware.ts

import { clerkMiddleware } from '@clerk/nextjs/server'; // Ensure this is the correct import

console.log("Initializing Clerk Middleware with public routes:", ["/"]);

export default clerkMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'], // Exclude Next.js internal routes
};
