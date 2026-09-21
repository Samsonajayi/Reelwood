import '../App.css'
import DashboardCounts from '../components/DashboardCounts';
import DashboardID from '../components/DashboardID';
import CreateTicket from '../components/CreateTicket';
import Header_Main from '../components/Header_main';


function MyDashboard(){
    return(
        <section className='dashboard'>
            <div style={{width:'100%',backgroundImage: 'linear-gradient( rgba(0, 0, 0, 0.74),rgba(0, 0, 0, 0.822)), url(../assets/header.jpg)', height:'100px', backgroundSize:'cover', backgroundPosition:'center'}}>
                <Header_Main/>
            </div>
            <div>
                <CreateTicket/>
            </div>
            <div>
              
            </div>

        </section>
    )
}

export default MyDashboard;