import React from 'react'
import { FaTwitter, FaFacebookF  } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";
import { PiMapPinFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='flex flex-col w-full items-center text-sm font-semibold bg-black text-gray-400 space-y-10 py-8'>
            <div className='flex flex-col md:flex-row justify-between w-[70%]'>
                <div className='flex flex-row items-start space-x-10 pb-8 md:pb-0'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-white font-bold'>HELP</p>
                        <p className='hover:text-white cursor-pointer'>Get Help</p>
                        <p className='hover:text-white cursor-pointer'>Order Status</p>
                        <p className='hover:text-white cursor-pointer'>Shipping and Delivery</p>
                        <p className='hover:text-white cursor-pointer'>Returns</p>
                        <p className='hover:text-white cursor-pointer'>Payment Options</p>
                        <p className='hover:text-white cursor-pointer'>Contact Us</p>
                        <p className='hover:text-white cursor-pointer'>Reviews</p>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-white font-bold'>COMPANY</p>
                        <p className='hover:text-white cursor-pointer'>About Mike</p>
                        <p className='hover:text-white cursor-pointer'>News</p>
                        <p className='hover:text-white cursor-pointer'>Careers</p>
                        <p className='hover:text-white cursor-pointer'>Investors</p>
                        <p className='hover:text-white cursor-pointer'>Sustainability</p>
                        <p className='hover:text-white cursor-pointer'>Purpose</p>
                    </div>
                </div>
                <div className='flex flex-row items-start text-black text-lg space-x-4'>
                    <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] text-center bg-gray-400 hover:bg-white cursor-pointer'><FaTwitter /></div>
                    <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] text-center bg-gray-400 hover:bg-white cursor-pointer'><FaFacebookF /></div>
                    <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] text-center bg-gray-400 hover:bg-white cursor-pointer'><TfiYoutube /></div>
                    <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] text-center bg-gray-400 hover:bg-white cursor-pointer'><ImInstagram /></div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-[70%]'>
                <div className='flex justify-start md:justify-center space-x-2 pb-4 md:pb-0'>
                    <div className='flex space-x-2 items-center text-white font-bold cursor-pointer'>
                        <div><PiMapPinFill /></div>
                        <p>Bulgaria</p>
                    </div>
                    <p>© 2024 Nike, Inc. All rights reserved</p>
                </div>
                <div className='flex justify-start md:justify-center space-x-4'>
                    <p className='hover:text-white cursor-pointer'>Privacy & Cookie Policy</p>
                    <p className='hover:text-white cursor-pointer'>Cookie Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
