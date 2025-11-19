import React from 'react'
import  seat from '../../assets/Dashboard/seat.svg'
import Destinations from './Destinations'
import learnmore from '../../assets/Dashboard/learnmore.png'
import Explore from './Explore'
const Dashboard = () => {
return (
    <div className='relative'>
            <div className="w-full bg-no-repeat bg-center bg-cover h-40 sm:h-56 md:h-80 lg:h-[28.125rem] flex flex-col justify-center" style={{ backgroundImage: `url(${seat})` }}>
                    <div className="relative w-fit   left-[2rem] md:left-[6.5rem] 

before:content-['It\'s_arrived,_the'] before:absolute before:-top-2 before:md:-top-8 before:font-semibold 
before:text-[0.5rem] 
before:md:text-[1.25rem] 


after:content-['you\'ve_been_waiting_for'] after:absolute after:top-5 after:md:top-16 after:-right-1 after:font-semibold
after:text-[0.5rem] 
after:md:text-[1.25rem]">
<span className='font-medium font-serif text-[1rem] md:text-[2.5rem]  relative  '>PREMIUM ECONOMY </span>
                    </div>
                    
                    <button className='relative left-[9rem] md:left-[25rem] bg-red-600 hover:bg-red-400 rounded w-fit md:text-[1.5rem] top-3 md:top-10 '><img src={learnmore}   alt="" className='h-4 md:h-10'/></button>

            </div>    
        <Destinations/>
    </div>
)
}

export default Dashboard
