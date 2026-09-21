import '../App.css'
import { MdCancel } from "react-icons/md";
import Successful  from "../assets/successful.png"
import { useLocation } from 'react-router-dom'

function CardPayment({ amount: paymentAmount, email: paymentEmail, onClose }){
    const { state } = useLocation()
    const amount = paymentAmount ?? state?.amount ?? 10100
    const email = paymentEmail ?? state?.email ?? 'helenchinweike@gmail.com'
    const formattedAmount = amount.toLocaleString()

    return(
        <section className='cardpayment'>
            <div className='pcard'>
                <button type="button" className='xicon' aria-label="Close payment" onClick={onClose}><MdCancel style={{fontSize:'40px', color:'var(--accent)'}}/></button>
                <p className='email'>{email}</p>
                <h2>NGN {formattedAmount}</h2>
                <div className='paywith'><span className='pwc'>PAY WITH CARD</span><span className='pwb'>PAY WITH BANK</span></div>
                <form action="">
                    <p><input type="number" placeholder='Card number'/></p>
                    <p style={{display:'flex', gap:'10px'}}><input type="number" placeholder='Expiry date'/> <input type="number" placeholder='CVV'/></p>
                    <p><button>Pay NGN {formattedAmount}</button></p>
                </form>
            </div>

             <div className='successful'>
                <p className='xicon'><MdCancel style={{fontSize:'40px', color:'var(--accent)'}}/></p>
                <p className='email'>helenchinweike@gmail.com</p>
                <p><img src={Successful} alt="Successful" /></p>
                <p><h2>Payment Successful</h2></p>
                <p>Your ticket ID has been sent to your email</p>
                
            </div>
        </section>
    )
}

export default CardPayment;