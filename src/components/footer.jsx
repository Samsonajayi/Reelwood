import '../App.css'
import logo from '../assets/Logo.png'


function Footer(){

    return(
        <section className='footer' id='contact'>
            <div className='set'>
                <img src={logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, 
                    sed eiusm tempor incididunt ut labe 
                    dolore magna aliqua enim ad minim veniam 
                    exercitation,
                </p>
                <p></p>
                <p>© 2021 Reelword. All rights reserved.</p>
            </div>

            <div id='help'>
                <ul>
                    <li><h2>Business</h2></li>
                    <li>Sponsorship</li>
                    <li>Partnership</li>
                    <li>Affilate Partners</li>
                    <li>Advert Placements</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><h2>Events</h2></li>
                    <li>Free events</li>
                    <li>Upcoming events</li>
                    <li>This week's events</li>
                    <li>Events by cities</li>
                </ul>
            </div>

            <div>
                <h2><label>Don't miss updates</label></h2>
                <form action="">
                <p><input type="email" placeholder='Enter your email address' required/></p>
                <span><input type="checkbox" required/> receive promotional updates</span>
                <p><button type='submit'>Subscribe To Updates</button></p>
                </form>
            </div>

        </section>
    )
}

export default Footer;