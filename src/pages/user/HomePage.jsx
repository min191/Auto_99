import React from 'react'
import BannerHomePage from '../../components/BannerHomePage'
import ModelComponent from '../../components/ModelComponent'
import ContactForm from '../../components/ContactFrom'
import BlogWeekly from '../../components/BlogWeekly'
import NewArrivals from '../../components/NewArrivals'

const HomePage = () => {
  return (
    <div>
        <BannerHomePage/>
        <ModelComponent/>
        <ContactForm/>
        <BlogWeekly/>
        <NewArrivals/>
        
    </div>
  )
}

export default HomePage