import '../App.css'
import {Link} from 'react-router-dom'



function Header() {

  return (
    <>
    <section className="header">
        <div className='bottom'>
            <p>Create Event Ticket With Few Clicks</p>
            <p><input type="text" placeholder="What's the name of your event ? " /></p>
            <p><Link  to='/authentication' ><button>Create Event Tickets</button></Link></p>
        </div>

    </section>
    </>
  )
}

export default Header;

