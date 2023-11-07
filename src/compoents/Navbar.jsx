import React from 'react'
import {AiFillShopping} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiSolidMessageDots} from 'react-icons/bi'
import {GiHearts} from 'react-icons/gi'
import {BsFillCartDashFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div>
     <nav className='flex gap-10 px-20 py-4 items-center fixed z-20 w-full border-b-4 border-white shadow '>
        <div className='flex'>
        <AiFillShopping color='blue' size={25}/>
        <p className='font-bold text-blue-500 text-xl'>Brands</p>
        </div>

        <div className='border-2 border-blue-400 w-full  rounded-md h-9  flex'> 
            <div className='w-full px-2 text-xl '>Search</div>

            <div className='flex '>
            <div className='w-28 border-x-2 px-2   border-blue-400'>All Category</div>
            <div className='bg-blue-400 w-24 px-2 text-white'>Search</div>
            </div>
            
        </div>

        <div className='flex gap-7  justify-center  text-slate-600 '>
            <div>
                <div className=' px-2 '>
                <BsFillPersonFill/>
                </div>
           
            <p>Profile</p>
            </div>

            <div>
                <div className='px-2 '>
            <BiSolidMessageDots/>
                </div>
            <p>Message</p>
            </div>

            <div>
                <div className='px-2' >
            <GiHearts/>
                </div>
            <p>orders</p>
            </div>

            <div>
                <div className='px-2 ' >
            < BsFillCartDashFill/>
                </div>
            <p> Cart</p>
            </div>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
