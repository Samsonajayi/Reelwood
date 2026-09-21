import "../App.css";
import Header_Main from "../components/Header_main.jsx";
import Footer from "../components/footer.jsx";
import SelectTicket from "../components/SelectTicket.jsx"
import OrderTicket from "../components/TicketOrder.jsx"
import CardPayment from "../components/CardPayment.jsx"
import Ticketselection from "../assets/Ticketselection.jpg"
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const initialTickets = [
  { id: 'regular', name: 'Regular', price: 10000, quantity: 0 },
  { id: 'gold', name: 'Gold Table', price: 150000, quantity: 0 },
  { id: 'vip', name: 'VIP', price: 200000, quantity: 0 },
  { id: 'platinum', name: 'Platinum Table For 10', price: 2000000, quantity: 0 },
]

function BookingTicketPage() {
  const { state: selectedEvent } = useLocation()
  const event = selectedEvent ?? {
    title: 'Oasis Event',
    time: '06:00PM',
    date: '24 Nov 20',
    location: 'Oasis Banqueting Hall, 6-8 Thames Road, Portharcourt, Rivers state',
    image: Ticketselection,
  }
  const [tickets, setTickets] = useState(initialTickets)
  const [showOrder, setShowOrder] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentAmount, setPaymentAmount] = useState(0)
  const [paymentEmail, setPaymentEmail] = useState('')

  function updateQuantity(ticketId, change) {
    setTickets((currentTickets) => currentTickets.map((ticket) => (
      ticket.id === ticketId
        ? { ...ticket, quantity: Math.max(0, ticket.quantity + change) }
        : ticket
    )))
  }

  return (
    <>
      <div>
        <Header_Main />
      </div>
      {!showOrder ? (
        <SelectTicket event={event} tickets={tickets} onQuantityChange={updateQuantity} onContinue={() => setShowOrder(true)} />
      ) : (
        <>
          <OrderTicket
            tickets={tickets}
            onBack={() => setShowOrder(false)}
            onMakePayment={(amount, email) => {
              setPaymentAmount(amount)
              setPaymentEmail(email)
              setShowPayment(true)
            }}
          />
          {showPayment && (
            <CardPayment amount={paymentAmount} email={paymentEmail} onClose={() => setShowPayment(false)} />
          )}
        </>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
}

export default BookingTicketPage;
