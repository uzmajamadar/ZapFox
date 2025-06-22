import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define public routes matcher (sign-in, sign-up, and home)
const isPublicRoute = createRouteMatcher([
  '/sign-in',  // Matches /sign-in
  '/sign-up',  // Matches /sign-up
  '/',
  '/api/clerk-webhook',
  '/api/drive-activity/notification',
  '/api/payment/success',
]);

const ignoredRoutes = [
  '/api/auth/callback/discord',
  '/api/auth/callback/notion',
  '/api/auth/callback/slack',
  '/api/flow',
  '/api/cron/wait',
];

// Middleware logic
export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth(); // Get the userId from Clerk
  const currentUrl = new URL(request.url);

  // If the user is not authenticated and trying to access a protected route
  if (!userId && !isPublicRoute(request)) {
    // Attach the current URL to the redirect_url query parameter so the user can return here after signing in
    const redirectUrl = encodeURIComponent(currentUrl.toString());
    return NextResponse.redirect(new URL(`/sign-in?redirect_url=${redirectUrl}`, request.url));
  }

  // If the user is authenticated and trying to access public routes, redirect them to the dashboard
  // Remove the redirect to dashboard for the home page
  if (userId && isPublicRoute(request) && currentUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next(); // Continue to the requested route
});

// Configuration for matching all routes except static files and Next.js internals
export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)', // Ensure API routes are matched properly
  ],
};
