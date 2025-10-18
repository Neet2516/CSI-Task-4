import React from 'react'
import apple from '../assets/apple.svg'
import google  from '../assets/googleplay.svg'
import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'


const Footer = () => {
    const links = [
'Delhi to Sydney Flight ',
'Mumbai to Bangkok Flight ',
'Delhi to Singapore Flight ',
'Mumbai to London Flight ',
'Delhi to Ahmedabad Flight ',
'Delhi to Kochi Flight ',
'Mumbai to Chennai Flight ',
'Mumbai to Dubai Flight ',
'Ahmedabad to Jaipur Flight ',
'Mumbai to Goa Flight ',
'Pune to Delhi Flight ',
'Kolkata to Bangalore Flight ',
'Delhi to Mumbai Flight ',
'Mumbai to Delhi Flight ',
'Delhi to New york Flight ',
'Delhi to Goa Flight ',
];
  return (
    <div className='bg-[#333333]  w-full py-[10px] px-[2.5rem] flex flex-col overflow-x-hidden '>
        <h2 className='text-white text-[1.5rem] font-semibold  font-sans mb-[1.5rem]'>Popular Domestic Flight Routes</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-5 text-[#606060]'>
            {
                links.map((e) => {
                    return (<h2 className='hover:text-[#971e1c] text-[0.3rem] sm:text-[1rem]  '>{e}</h2>)
                })
            }
        </div>
        <div className=" mt-[40px] w-full h-[2px] bg-gray-200 "></div>
        <div className='Link-page flex flex-col md:flex-row justify-evenly'>
            <div className='flex flex-col'>
                <h1 className='text-[1.3rem] font-semibold text-white font-sans my-[1rem] py-[0.5rem] px-[0.5rem]'>Subscribe to our special offers</h1>
                <p className='hover:text-[#971e1c] text-[0.3rem] sm:text-[1rem]  text-[#606060] px-[0.5rem] mb-[1.5rem]'>Save with our latest fares and offers</p>
                <div className ='flex flex-col sm:flex-row justify-between rounded-xs bg-white p-2'> <input type="text"  placeholder='Email Address' /><div><b>SIGN UP</b></div></div>
                
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[1.3rem] font-semibold text-white font-sans my-[1rem] py-[0.5rem] px-[0.5rem]'>Tarang Airway App</h1>
                <p className='hover:text-[#971e1c] text-[0.3rem] sm:text-[1rem]  text-[#606060] px-[0.5rem] mb-[1.5rem]'>Books and manage your flights on the go</p>
                <div className='flex  flex-wrap justify-between items-center gap-5'><img src={apple} alt="" />
                <img src={google}/></div>
            </div>
            <div className='flex flex-col'>
                <h1 className='text-[1.3rem] font-semibold text-white font-sans my-[1rem] py-[0.5rem] px-[0.5rem]'>Connect with us</h1>
                <p className='hover:text-[#971e1c] text-[0.3rem] sm:text-[1rem]  text-[#606060] px-[0.5rem] mb-[1.5rem]'>Share your Emirates expierence</p>
                <div className='flex justify-between items-center gap-5 flex-wrap'>
                    <img src={facebook} alt="" height="50px"width="50px" /><img src={insta} alt=""  height="50px"width="50px"/><img src={twitter} alt="" height="50px"width="50px" /><img src ={youtube} alt="" height="50px"width="50px" />
                </div>

            </div>
            <div></div>
        </div>
      
    </div>
  )
}

export default Footer
