import '../App.css'
import React, { useState } from 'react';
import { RxCalendar } from "react-icons/rx";
import { MdAccessTimeFilled} from "react-icons/md";


  

function CreateTicket(){

    const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    
    if (file) {
      // Create a temporary URL pointing to the file on the user's computer
      const objectURL = URL.createObjectURL(file);
      setImageSrc(objectURL);
    }
  };
    return(
        <section className='createticket'>
            <div className='ticketdet1'>
                <span className='chooseimg'><span><input type="file" accept="image/*" onChange={handleImageChange} /><p>(1400px X 400px not larger than 5mb)</p></span>
 {imageSrc && (
        
          <img 
            src={imageSrc} 
            alt="Preview" 
            style={{ Width: '100%', borderRadius: '3px' }} 
          />
      )}</span>

      <span className='eventmain'>
        <p><label htmlFor="event title">Event Title</label><br />
        <input type="text" /></p>
        <p><label htmlFor="event host">Event Host</label><br />
        <input type="text" /></p>
        <p><label htmlFor="event description">Event Description</label><br />
        <textarea name="description" ></textarea></p>
        <p className='textareawords'>0/200</p>
      </span>

        </div>

      <div >
        <p className='tick2'>Time & Date</p>
        <div className='ticketdet2'>
            <p><span><RxCalendar style={{fontSize:'25px'}}/></span><input type="text" placeholder='Start date'/></p>
            <p><span><MdAccessTimeFilled style={{fontSize:'25px'}}/></span><input type="text" placeholder='Start time'/></p>
            <p><span><RxCalendar style={{fontSize:'25px'}}/></span><input type="text" placeholder='End date' /></p>
            <p><span><MdAccessTimeFilled style={{fontSize:'25px'}}/></span><input type="text" placeholder='End time' /></p>
        </div>
      </div>

      <div className='ticketdet3'>
        <p><label htmlFor="Event Location">Event Location</label><br />
        <input type="text" /></p>
        <p><label htmlFor="Enter location url">Enter location url</label><br />
        <input type="text" /></p>
        <p><label htmlFor="Event category">Event category</label><br />
        <input type="text" /></p>
        <p><label htmlFor="ticket type">Ticket type</label><br />
        <input type="text" /></p>

      </div>

      <div className='ticketdet4'>

      </div>
        </section>
    )
}

export default CreateTicket;