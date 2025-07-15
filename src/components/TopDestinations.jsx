import React from 'react'
import Title from './Title'
import { useAppContext } from '../context/AppContext'

const TopDestinations = () => {
    const { navigate } = useAppContext()

    const destinations = [
        {
            id: 1,
            name: "Mumbai",
            country: "India",
            hotels: "3,245 hotels",
            image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Delhi",
            country: "India", 
            hotels: "2,876 hotels",
            image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Goa",
            country: "India",
            hotels: "1,654 hotels", 
            image: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 4,
            name: "Jaipur",
            country: "India",
            hotels: "987 hotels",
            image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 5,
            name: "Bangalore",
            country: "India",
            hotels: "2,134 hotels",
            image: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 6,
            name: "Kerala",
            country: "India",
            hotels: "1,432 hotels",
            image: "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 7,
            name: "Agra",
            country: "India",
            hotels: "756 hotels",
            image: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 8,
            name: "Udaipur",
            country: "India",
            hotels: "543 hotels",
            image: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 9,
            name: "Dubai",
            country: "United Arab Emirates",
            hotels: "2,847 hotels",
            image: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 10,
            name: "Singapore",
            country: "Singapore",
            hotels: "1,234 hotels",
            image: "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 11,
            name: "New York",
            country: "United States",
            hotels: "3,456 hotels",
            image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 12,
            name: "London",
            country: "United Kingdom",
            hotels: "2,189 hotels",
            image: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 13,
            name: "Tokyo",
            country: "Japan",
            hotels: "1,876 hotels",
            image: "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 14,
            name: "Paris",
            country: "France",
            hotels: "2,543 hotels",
            image: "https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 15,
            name: "Bangkok",
            country: "Thailand",
            hotels: "1,654 hotels",
            image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        },
        {
            id: 16,
            name: "Sydney",
            country: "Australia",
            hotels: "987 hotels",
            image: "https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }
    ]

    const handleDestinationClick = (destination) => {
        navigate(`/rooms?destination=${destination.name}`)
        scrollTo(0, 0)
    }

    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 py-20'>
            <Title 
                title="Top Destinations" 
                subTitle="Discover the world's most popular travel destinations with thousands of accommodation options to choose from."
                align="center"
            />
            
            <div className='flex gap-6 mt-16 w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400'>
                {destinations.map((destination) => (
                    <div 
                        key={destination.id}
                        onClick={() => handleDestinationClick(destination)}
                        className='group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex-shrink-0 w-72'
                    >
                        <div className='relative h-56 overflow-hidden'>
                            <img 
                                src={destination.image} 
                                alt={destination.name}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                        </div>
                        
                        <div className='absolute bottom-0 left-0 right-0 p-4 text-white'>
                            <h3 className='text-xl font-semibold font-playfair mb-1'>
                                {destination.name}
                            </h3>
                            <p className='text-sm text-white/90 mb-1'>
                                {destination.country}
                            </p>
                            <p className='text-xs text-white/80'>
                                {destination.hotels}
                            </p>
                        </div>
                        
                        <div className='absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            
            <button 
                onClick={() => { navigate('/rooms'); scrollTo(0, 0) }}
                className='mt-12 px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium'
            >
                View All Destinations
            </button>
        </div>
    )
}

export default TopDestinations