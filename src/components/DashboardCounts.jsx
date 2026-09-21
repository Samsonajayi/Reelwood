import '../App.css'


function DashboardCounts(){
    return(
        <section className='dashboardCount'>
            <h1>My Dashboard</h1>
            <div className='count'>
            <div>
                <p>0</p>
                <p>Total Events</p>
            </div>
            <div>
                <p>0</p>
                <p>Tickets Sold</p>
            </div>
            <div>
                <p>₦0</p>
                <p>Transactions</p>
            </div>
            </div>
        </section>
    )
}

export default DashboardCounts;