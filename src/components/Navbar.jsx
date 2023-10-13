import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <header>
        <NavLink to="/">Story GPT</NavLink>
        <nav>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="donate">Donate</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}