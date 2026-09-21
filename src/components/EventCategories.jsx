import '../App.css'
import CardBox from './ui/cardBox'


function EventCategories({ selectedCategory, onSelectCategory }) {
    const categories = ['Comedy', 'TeachTalk', 'Fashion', 'Music', 'Party', 'Social', 'Business', 'Live Show']

    return (
        <section className='eventCategories'>
            <h1>Events Categories</h1>
            <div className='eventsBox'>
                {categories.map((category) => (
                    <div key={category}>
                        <CardBox
                            cardMain={category}
                            isSelected={selectedCategory === category}
                            onSelect={onSelectCategory}
                        />
                    </div>
                ))}
            </div>
            <button
                type="button"
                className="category-reset"
                onClick={() => onSelectCategory('')}
                disabled={!selectedCategory}
            >
                Show all events
            </button>
        </section>
    )
}

export default EventCategories;