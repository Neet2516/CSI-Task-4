import React from 'react'

const Footer = () => {
    const links = [
'Delhi to Sydney Flight ',
'Mumbai to Bangkok Flight ',
'Delhi to Singapore Flight ',
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
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 text-[#606060]'>
            {
                links.map((e) => {
                    return (<h2 className='hover:text-[#971e1c] text-[1rem]'>{e}</h2>)
                })
            }
        </div>
        <div className=" mt-[40px] w-full h-[2px] bg-gray-200"></div>
        <div className='Link-page'>
            <div></div>
            <div></div>
            <div></div>
        </div>
      
    </div>
  )
}

export default Footer
