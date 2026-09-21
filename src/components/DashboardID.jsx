import '../App.css'

function DashboardID(){
    return(
        <section className='dashboardId'>
            <p className='search'><input type="text" placeholder='Search ticket ID'/></p>
            <span>
                <h2>Event attendee</h2>
                <h2>Phone number</h2>
                <h2>Email address</h2>
                <h2>Date purchased</h2>
            </span>

            <div>
                <p>Helen chinweike</p>
                <p>07065135227</p>
                <p>helenchinweike"gmail.com</p>
                <p>10 Oct 2021</p>
            </div>

            <p className='but'><button>Check-in</button></p>
        </section>
    )
}

export default DashboardID;