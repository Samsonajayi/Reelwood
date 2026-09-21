import '../App.css'
import Card from './ui/card'
import Event1 from '../assets/event1.png'
import Event2 from '../assets/event2.png'
import Event3 from '../assets/event3.png'
import Event4 from '../assets/event4.png'
import Event5 from '../assets/event5.jpg'
import Event6 from '../assets/event6.png'


function UpcomingEvents({ selectedCategory }) {
    const events = [
        { image: Event1, alt: 'TechUp Portharcourt', time: '06:00pm', date: '03 Jun 20', title: 'TechUp Portharcourt', category: 'TeachTalk' },
        { image: Event2, alt: 'Singles Hangout', time: '06:00pm', date: '03 Jun 20', title: 'Singles Hangout', category: 'Social' },
        { image: Event3, alt: 'Singles Hangout', time: '06:00pm', date: '03 Jun 20', title: 'Singles Hangout', category: 'Social' },
        { image: Event4, alt: 'Business Conference', time: '06:00pm', date: '03 Jun 20', title: 'Business Conference', category: 'Business' },
        { image: Event5, alt: 'TechUp Portharcourt', time: '06:00pm', date: '03 Jun 20', title: 'TechUp Portharcourt', category: 'TeachTalk' },
        { image: Event6, alt: 'Comedy Show', time: '06:00pm', date: '03 Jun 20', title: 'Comedy Show', category: 'Comedy' },
    ]
    const visibleEvents = selectedCategory
        ? events.filter((event) => event.category === selectedCategory)
        : events

    return (
        <section className='upcomingEvent' id='upcoming'>
            <h1>{selectedCategory ? `${selectedCategory} Events` : 'Upcoming Events'}</h1>
            <div className='Events'>
            {visibleEvents.map((event) => <div key={`${event.title}-${event.image}`}>
                <Card
                    CardImage={event.image}
                    CardAlt={event.alt}
                    CardTime={event.time}
                    CardDate={event.date}
                    CardTitle={event.title}
                    CardDetails="Opposite Portharcout Pleasure Park behind bori camp, portharcout, rivers state"
                    CardButton="Grab a Ticket"
                />
            </div>)}
            </div>
            {visibleEvents.length === 0 && <p>No events are available in this category yet.</p>}
        </section>
    )
}

export default UpcomingEvents;