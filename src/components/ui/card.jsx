import '../../index.css'
import { RxCalendar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { MdAccessTimeFilled, MdLocationPin} from "react-icons/md";



function Card(props) {
    return (
        <section className='card'>
            <p className='Cimg'><img src={props.CardImage} alt={props.CardAlt} /></p>
            <span>
            <p className='Ctime'><MdAccessTimeFilled />{props.CardTime}</p>
            <p className='cdate'><RxCalendar/> {props.CardDate}</p>
            </span>
            <div>
            <p className='ctitle'><h2>{props.CardTitle}</h2></p>
            <p className='cdetail'><MdLocationPin /> {props.CardDetails}</p>
            </div>
            <p><Link to='/bookTicket' state={{
                title: props.CardTitle,
                time: props.CardTime,
                date: props.CardDate,
                location: props.CardDetails,
                image: props.CardImage,
            }}><button>{props.CardButton}</button></Link></p>
            <p><br /></p>
            
        </section>

    )
}

export default Card;