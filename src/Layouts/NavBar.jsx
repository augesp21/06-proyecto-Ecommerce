import { Routes, Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <nav className='nav bg-dark'>
          <div className='container justify-content-space-around'>
            <ul className="nav nav-links">
          
              <li className='nav-item'>
                <Link to='/'>Home</Link>
              </li>

              <li className='nav-item'>
                <Link to='/items'>Items</Link>
              </li>
                
              <input type="text" className='form me-2' /> 
            </ul>

          </div>

        

        </nav>
  )
}

export default NavBar