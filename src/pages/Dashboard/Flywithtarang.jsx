import React from 'react'
import Business from '../../assets/Explore/Business.png'
import Dubai from '../../assets/Explore/Dubai.png'
import Economy from '../../assets/Explore/Economy.png'
import First from '../../assets/Explore/First.png'
import Premium from '../../assets/Explore/Premium.png'

const FLywithtarang= () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-sm'>FLYING WITH <b>TARANG</b></h2>
            <h3 className=' my-5 text-2xl font-semibold font-serif text-center'>Make it an incredible journey</h3>
            <h3 className='text-xs text-[#959595] text-center' >Explore the Emirates experience and plan an unforgettable trip beyond your flight</h3>
            <div className='mt-10 w-full flex items-center justify-around'>
              <div className="left "><img src={Dubai} alt="" /></div>
              <div className="right grid grid-cols-2 ">
              <img src={First} alt=""/>
              <img src={Business} alt="" />
              <img src={Premium} alt="" />
              <img src={Economy} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default FLywithtarang
