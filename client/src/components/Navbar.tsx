import React, { useEffect, useState } from 'react';
import { SiJordan, SiNike } from "react-icons/si";
import NavDropdownItem from './NavDropdownItem';
import navData from '../utils/NavDropdownItemsInfoObject';
import { GoSearch } from "react-icons/go";
import { FaRegHeart, FaBars } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredSearch, setHoveredSearch] = useState(false);
    const [menuIsOpen, SetMenuIsOpen] = useState(false);

    const menuItems = ['New & Featured', 'Men', 'Women', 'Kids', 'Sale'];

    const carouselItems = [
        {title: 'Air Max Dn - Feel The Unreal', content: 'Shop'},
        {title: 'Shop All New Arrivals', content: 'Shop'},
        {title: 'Free Delivery & Returns', content: 'Join Us'}
    ]

    const handleMouseEnterSearch = () => {
        setHoveredSearch(true)
    }

    const handleMouseLeaveSearch = () => {
        setHoveredSearch(false)
    }

    const menuToggle = () => {
        SetMenuIsOpen(!menuIsOpen)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % carouselItems.length);
        }, 3000);
        return () => clearInterval(interval)
    }, [carouselItems.length])

    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='hidden md:flex md:flex-row w-full bg-secondary h-[50px] justify-between items-center px-10'>
                <div className='text-black text-lg cursor-pointer hover:text-gray-500'>
                    <SiJordan />
                </div>
                <div className='flex flex-row items-center text-black text-sm font-semibold space-x-2'>
                    <p className='cursor-pointer hover:text-gray-500'>Find a Store</p>
                    <p>|</p>
                    <p className='cursor-pointer hover:text-gray-500'>Help</p>
                    <p>|</p>
                    <p className='cursor-pointer hover:text-gray-500'>Join Us</p>
                    <p>|</p>
                    <p className='cursor-pointer hover:text-gray-500'>Sign In</p>
                </div>
            </div>
            <div className='flex flex-row w-full bg-primary h-[70px] justify-between items-center px-10'>
                <div className='text-black text-xxl cursor-pointer hover:text-gray-500'>
                    <SiNike />
                </div>
                <div className='flex flex-row w-[65%] justify-between'>
                    <div className='hidden md:flex md:flex-row items-center text-black text-md font-semibold space-x-4'>
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className='relative cursor-pointer border-b-2 border-transparent hover:border-black'
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem('')}
                            >
                                <div className='px-4 pt-2 pb-4'>{item}</div>
                                {hoveredItem === item && (
                                    <div className='fixed w-screen inset-x-0 top-[110px] bg-white shadow-lg' style={{animation: 'slideDown 0.5s ease-out forwards'}}>
                                        <NavDropdownItem navProp={navData.navProp} />
                                        <div className='absolute bg-black opacity-50 w-full h-screen' onMouseEnter={() => setHoveredItem('')}></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between items-center md:space-x-0 space-x-3'>
                        <div className={`flex items-center rounded-full ${hoveredSearch ? 'bg-gray-200' : 'bg-secondary'} outline-none pl-2 w-[70%] px-4 py-2`} onMouseEnter={handleMouseEnterSearch} onMouseLeave={handleMouseLeaveSearch}>
                            <div className='bg-transparent rounded-full text-black pl-1'>
                                <GoSearch />
                            </div>
                            <input type="text" placeholder='Search' className={`${hoveredSearch ? 'bg-gray-200' : 'bg-secondary'} outline-none pl-2 w-full`} />
                        </div>
                        <div className='text-lg cursor-pointer border-1 border-transparent rounded-full hover:bg-gray-300 p-2'><FaRegHeart /></div>
                        <div className='text-lg cursor-pointer border-1 border-transparent rounded-full hover:bg-gray-300 p-2'><IoBagOutline /></div>
                        <div className='md:hidden text-lg cursor-pointer' onClick={menuToggle}><FaBars /></div>
                    </div>
                    {menuIsOpen && (
                        <div className='md:hidden absolute top-[70px] bg-primary left-0 w-full bg-white shadow-lg z-50' style={{animation: 'slideDown 0.5s ease-out forwards'}}>
                            <div className='flex flex-col items-center text-black text-md font-semibold space-y-4 px-4 pt-4 pb-8'>
                                {menuItems.map((item, index) => (
                                    <div key={index} className='border-b-2 border-transparent hover:border-black cursor-pointer'>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex flex-row w-full bg-secondary h-[55px] justify-center items-center px-10'>
                <div className='w-full overflow-hidden bg-secondary h-[55px] pt-1'>
                    <div 
                        className={`${hoveredItem !== '' ? 'hidden' : 'flex'} justify-center text-center transition-transform duration-1000 ease-in-out`} 
                        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                    >
                        {carouselItems.map((item, index) => (
                            <div key={index} className='w-full flex-shrink-0 text-center'>
                                <div className='text-md'>{item.title}</div>
                                <p className='cursor-pointer'>
                                    <span className='border-b-2 border-black'>{item.content}</span> {/* Inline element for border */}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
