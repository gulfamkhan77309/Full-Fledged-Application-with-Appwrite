import React, { useState } from 'react'
import Container from '../container/Container'
import Logo from '../Logo'
import LogoutBtn from './LogoutBtn'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  const handleNavigate = (slug) => {
    navigate(slug);
    setMenuOpen(false);
  }

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex flex-wrap items-center justify-between'>
          <div className='flex items-center justify-between w-full sm:w-auto'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>

            {/* Hamburger — only shows below sm breakpoint */}
            <button
              className='sm:hidden p-2 rounded-md hover:bg-blue-100'
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label='Toggle navigation menu'
              aria-expanded={menuOpen}
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                {menuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>

          <ul
            className={`${menuOpen ? 'flex' : 'hidden'
              } flex-col w-full mt-3 gap-1
              sm:flex sm:flex-row sm:w-auto sm:ml-auto sm:mt-0 sm:gap-0`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='w-full sm:w-auto'>
                  <button
                    onClick={() => handleNavigate(item.slug)}
                    className='w-full sm:w-auto text-left sm:text-center block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='w-full sm:w-auto'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header