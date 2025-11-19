import React from 'react'
import img1 from '../../assets/Destinations/img1.png'
import img2 from '../../assets/Destinations/img2.png'
import img3 from '../../assets/Destinations/img3.png'
import img4 from '../../assets/Destinations/img4.png'
import ticket from '../../assets/Dashboard/ticket.png'
import Ticket from './ticket'
import FLywithtarang from './Flywithtarang'


const Destinations = () => {
    
    const destimg = [img1,img2,img3,img4];
  return (
    <div className='relative  -top-10 sm:-top-15 md:-top-20 lg:-top-35 flex flex-col items-center'>
      <Ticket/>
      <div className="page flex flex-col items-center justify-center ">
        <h1 className='text-center text-xl '>Featured Destinations from <span className='font-bold'>India</span></h1>
        <div className='px-5 grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                destimg.map((element, index) => {
                    return (
                        <img key={index} src={element} alt={`destination-${index}`} className='aspect-video' />
                    );
                })
            }
        </div>
      </div>
      <FLywithtarang/>
    </div>
  )
}

export default Destinations
