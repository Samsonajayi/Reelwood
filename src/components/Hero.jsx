import '../App.css'
import heroImage from '../assets/hero.png'
import { useEffect, useState } from 'react'
import { RxCalendar } from "react-icons/rx";
import { MdAccessTimeFilled, MdLocationPin} from "react-icons/md";
import {Link} from 'react-router-dom'


function Hero() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000)

        return () => clearInterval(timer)
    }, [])

    return(
    <>
        <section className="hero-top">
            <div className='left'>
                <img src={heroImage} alt="hero" />
                <div className='hero-time'>
                    <p>{currentTime.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    })}</p>
                </div>
            </div>
            <div className='right'>
                    <h1>Excellence in Leadership Conference PH 2021</h1>
                    <span><p><MdAccessTimeFilled/> 06:00pm</p><p><RxCalendar/> 03 jan 20</p></span>
                    <p><MdLocationPin style={{color: 'var(--social-bg)', fontSize:'35px'}}/>Opposite Portharcourt Pleasure Park behind bori camp, portharcourt, Rivers State.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt
                         ut labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation, Read more.</p>
                    <p className='but'><Link to='/bookTicket' state={{
                        title: 'Excellence in Leadership Conference PH 2021',
                        time: '06:00pm',
                        date: '03 jan 20',
                        location: 'Opposite Portharcourt Pleasure Park behind bori camp, portharcourt, Rivers State.',
                        image: heroImage,
                    }}><button>Book A Spot</button></Link></p>
            </div>
        </section>

        <section className="hero-bottom">
            <div className='left'>
                <h1>Tech Portharcourt</h1>
                <span><p><MdAccessTimeFilled/> 06:00pm</p><p><RxCalendar/> 03 jan 20</p></span>
                <p>Opposite Portharcourt Pleasure Park behind bori camp, portharcourt, Rivers State.</p>
                <p className='but'><Link to='/bookTicket' state={{
                    title: 'Tech Portharcourt',
                    time: '06:00pm',
                    date: '03 jan 20',
                    location: 'Opposite Portharcourt Pleasure Park behind bori camp, portharcourt, Rivers State.',
                    image: heroImage,
                }}><button>Book A Spot</button></Link></p>
            </div>
            <div className='right'>
                <p className="time-display">
                    <span className="time-unit">{String(currentTime.getHours()).padStart(2, '0')}</span>
                    <span>:</span>
                    <span className="time-unit">{String(currentTime.getMinutes()).padStart(2, '0')}</span>
                    <span>:</span>
                    <span className="time-unit">{String(currentTime.getSeconds()).padStart(2, '0')}</span>
                </p>
            </div>
        </section>
    </>
);
}

export default Hero;