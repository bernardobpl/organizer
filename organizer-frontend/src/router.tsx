import { createRouter, RouterProvider } from "@tanstack/react-router"
import { lazy, Suspense } from "react"
import { routeTree } from "./routeTree.gen"

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} router={router}/>
      </Suspense>
    </>
  )
}