import "../App.css";
import Header from "../components/Header.jsx";
import Header_Main from "../components/Header_main.jsx";
import Hero from "../components/Hero.jsx";
import UpcomingEvents from '../components/UpcomingEvents.jsx';
import EventCategories from '../components/EventCategories.jsx';
import Footer from "../components/footer.jsx";
import { useState } from 'react'

function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState('')

  function selectCategory(category) {
    setSelectedCategory(category)
    document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div>
        <Header_Main />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <UpcomingEvents selectedCategory={selectedCategory}/>
      </div>
      <div>
        <EventCategories selectedCategory={selectedCategory} onSelectCategory={selectCategory}/>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
