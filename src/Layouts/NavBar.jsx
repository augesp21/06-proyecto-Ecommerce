import { Routes, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Routes>
        <nav className='bg-dark'>
        
        <ul className="nav-links">
            <Link to='/'>
            <li>Home</li>
            </Link>

            <Link to='user-screen'>
            <li>Items</li>
            </Link>

        </ul>

        </nav>
    </Routes>
  )
}

export default NavBar