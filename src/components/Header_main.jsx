import '../App.css'
import logo from '../assets/Logo.png'
import { useState } from 'react'
import { IoClose, IoMenu } from "react-icons/io5";
import {Link} from 'react-router-dom'



function Header_Main() {
    const [isNavOpen, setIsNavOpen] = useState(false)

  return (
        <>
        <section className="header_main">
        <div className='top'>
            <img src={logo} alt="Logo" />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/#upcoming'>Upcoming</Link></li> 
                <li><Link to='/#contact'>Contact Us</Link></li>      
            </ul>
            <ul>
                <li><Link to='/#help'>Help</Link></li>
                <li><Link to='/authentication'>Login</Link></li>        
            </ul>

                        <button
                            className="nav_toggle"
                            type="button"
                            aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
                            aria-expanded={isNavOpen}
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            {isNavOpen ? <IoClose style={{fontSize: '42px'}} /> : <IoMenu style={{fontSize: '42px'}} />}
                        </button>
        </div>

                <div className={`header_nav${isNavOpen ? ' is-open' : ''}`}>
            <ul>
                <li><p><Link to='/' style={{color:'var(--bg)', fontWeight: '500', fontSize: '22px'}}>Home</Link></p></li>
                <li><p><Link to='/#upcoming' style={{color:'var(--bg)', fontWeight: '500', fontSize: '22px'}}>Upcoming</Link></p></li>
                <li><p><Link to='/#contact' style={{color:'var(--bg)', fontWeight: '500', fontSize: '22px'}}>Contact Us</Link></p></li>
                <li><p><Link to='/#help' style={{color:'var(--bg)', fontWeight: '500', fontSize: '22px'}}>Help</Link></p></li>
                <li><p><Link to='/authentication' style={{color:'var(--bg)', fontWeight: '500', fontSize: '22px'}}>Login</Link></p></li>
            </ul>      
        </div>
        </section>
        </>
  )
}

export default Header_Main;