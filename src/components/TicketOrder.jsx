import '../App.css'

// Main Container
function OrderTicket({ tickets, onBack, onMakePayment }) {
    const selectedTickets = tickets.filter((ticket) => ticket.quantity > 0)
    const subtotal = selectedTickets.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0)
    const serviceCharge = subtotal ? 100 : 0
    const finalTotal = subtotal + serviceCharge

    function handleSubmit(event) {
        event.preventDefault()
        const email = event.currentTarget.elements.email.value
        onMakePayment(finalTotal, email)
    }

    return (
        <section className='OrderTicket'>
            <form onSubmit={handleSubmit}>
           <div className='lhs'>
                <p>Your tickets informations will be sent to your email address</p>
                    <div><span>
                    <p><input type="name"  placeholder="First Name" required/></p>
                    <p><input type="name"  placeholder="Last Name" required/></p>
                    </span>
                    <p><input type="email" name="email" placeholder="Email Address" required/></p>
                    <p><input type="tel"  placeholder="Phone Number" required/></p>
                    <p><label htmlFor="Gender">Gender</label></p>
                    </div>
                    <span className='gender'>
                    <p><input type="radio" name="gender" id="male" value="male" required/>
                    <label htmlFor="male"> Male</label></p>
                    <p><input type="radio" name="gender" id="female" value="female" required/>
                    <label htmlFor="female"> Female</label></p>
                    </span>
                
            </div>
            <div className='rhs'>
                <h2>Your Order</h2>
                {selectedTickets.map((ticket) => (
                    <p key={ticket.id}>{ticket.quantity}x {ticket.name}<span> ₦{(ticket.price * ticket.quantity).toLocaleString()}</span></p>
                ))}
                <p>Service Charge <span> ₦{serviceCharge.toLocaleString()}</span></p>
                <p>Discount Fee <span> ₦0</span></p>
                <p className='final-total'>Final Total <span> ₦{finalTotal.toLocaleString()}</span></p>
                <div><button type="button" onClick={onBack}>Back</button><button type="submit">Make Payment</button></div>
            </div>
            </form>
        </section>
    )


}

export default OrderTicket;