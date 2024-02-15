import { NavLink, Outlet } from 'react-router-dom';

export function Layout() {
  return <>
    <nav>
      <ul>
        <li><NavLink to="/tabs">Tab Animation</NavLink></li>
        <li><NavLink to="/xstate">XState</NavLink></li>
      </ul>
    </nav>

    <main><Outlet /></main>
  </>
}