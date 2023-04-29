import React from 'react'
import './App.css'
import styles from './script';
import Stats from './components/Stats';
import Business from './components/Business';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonals from './components/Testimonals';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
  
  return (

    <div className='w-full text-white bg-primary overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonals/>
          <Clients/>
          <CTA />
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App