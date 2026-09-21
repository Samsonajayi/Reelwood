import '../App.css'
import Ticketselection from "../assets/Ticketselection.jpg"
import Ticket from "./ui/tickets"
import { FaLocationDot } from "react-icons/fa6";
function SelectTicket({ tickets, event, onQuantityChange, onContinue }){
    const selectedCount = tickets.reduce((total, ticket) => total + ticket.quantity, 0)
    return(
        <section className='Ticketselection'>
            <div className='lhs'>
                <p><u><FaLocationDot style={{ fontSize: '24px', cursor: 'pointer', color: 'var(--social-bg)' }}/></u> {event.location}</p>
                <span><p>{event.time}</p><p>{event.date}</p></span>
                <img src={event.image || Ticketselection} alt={event.title} />
            </div>
            <div className='rhs'>
                <h2>{event.title}<br />Select Ticket</h2>
                {tickets.map((ticket) => (
                    <p key={ticket.id}>
                        <Ticket
                            ticketName={ticket.name}
                            ticketPrice={` ₦${ticket.price.toLocaleString()}`}
                            ticketNumber={ticket.quantity}
                            onDecrease={() => onQuantityChange(ticket.id, -1)}
                            onIncrease={() => onQuantityChange(ticket.id, 1)}
                        />
                    </p>
                ))}
                <p><div><button type="button" onClick={onContinue} disabled={selectedCount === 0}>Buy Now ({selectedCount})</button></div></p>
            </div>
        </section>
    )
}

export default SelectTicket;