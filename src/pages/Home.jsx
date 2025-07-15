import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import TopDestinations from '../components/TopDestinations'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial '
import NewsLetter from '../components/NewsLetter'
import RecommendedHotels from '../components/RecommendedHotels'

const Home = () => {


    return (
        <>
            <Hero />
            <RecommendedHotels />
            <FeaturedDestination />
            <TopDestinations />
            <ExclusiveOffers />
            <Testimonial />
            <NewsLetter/>
        </>
    )
}

export default Home