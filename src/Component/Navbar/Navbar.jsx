import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
           <div className='nav-logo'>TESLA</div>
           <ul className='nav-menu'>
              <li>Vehicle</li>
              <li>Energy</li>
              <li>Charging</li>
              <li>Discover</li>
              <li className='nav-contact'>Contact</li>
           </ul>
        </div>
    )
}

export default Navbar