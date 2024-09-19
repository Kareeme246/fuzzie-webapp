import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/connections(.*)",
  "/workflows(.*)",
  "/settings(.*)",
  "/billing(.*)",
  "/templates(.*)",
  "/logs(.*)",
]);

const isAdminProtectedRoute = createRouteMatcher(["/admin/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  // https://clerk.com/docs/references/nextjs/clerk-middleware
  // Restrict admin routes to users with specific permissions
  if (isAdminProtectedRoute(req)) {
    auth().protect((has) => {
      return (
        has({ permission: "org:sys_memberships:manage" }) ||
        has({ permission: "org:sys_domains_manage" })
      );
    });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
