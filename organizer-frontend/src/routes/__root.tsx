import {
  Link,
  Outlet,
  createRootRoute
} from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/tasks" search={{query: undefined, taskIdModal: undefined}} className="[&.active]:font-bold">
          Tasks
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})

