import { CiCirclePlus, CiCircleMinus , } from "react-icons/ci";
import '../../App.css'

// Main Container
function SelectTicket( props ) {
    return (
        <section className='Ticketlist'>
            <p></p>
            <p>{props.ticketName}</p>
            <span>{props.ticketPrice}</span>
            <p className='add'>
                <button type="button" aria-label={`Remove one ${props.ticketName} ticket`} onClick={props.onDecrease} disabled={props.ticketNumber === 0}>
                    <CiCircleMinus />
                </button>
                {props.ticketNumber}
                <button type="button" aria-label={`Add one ${props.ticketName} ticket`} onClick={props.onIncrease}>
                    <CiCirclePlus />
                </button>
            </p>
        </section>
    )


}

export default SelectTicket;