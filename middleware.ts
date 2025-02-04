import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

/********************** MIDLLEWARE EXPLAINS ***************************/

/** Execution order **/
// 1. headers from next.config.js
// 2. redirects from next.config.js
// 3. Middleware (rewrites, redirects, etc.)
// 4. beforeFiles (rewrites) from next.config.js
// 5. Filesystem routes (public/, _next/static/, pages/, app/, etc.)
// 6. afterFiles (rewrites) from next.config.js
// 7. Dynamic Routes (/blog/[slug])
// 8. fallback (rewrites) from next.config.js

/* MATCHERS EXAMPLE
 * Match all request paths except for the ones starting with:
 * - api (API routes)
 * - _next/static (static files)
 * - _next/image (image optimization files)
 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
 */
// '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',

/* Filter by request headers */
// {
//     source:
//       '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
//     missing: [
//       { type: 'header', key: 'next-router-prefetch' },
//       { type: 'header', key: 'purpose', value: 'prefetch' },
//     ],
//  },

/* Conditional Statements */
// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/about')) {
//       return NextResponse.rewrite(new URL('/about-2', request.url))
//     }

//     if (request.nextUrl.pathname.startsWith('/dashboard')) {
//       return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//     }
//   }
