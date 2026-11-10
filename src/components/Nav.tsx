import { useState } from 'react';
import HamburgerMenu from '../assets/hamburger.png'
import Logo from '../assets/logo-text.png'
import { IoMdClose } from 'react-icons/io';

export const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuIcon = (setValue:boolean):void => {
        setIsOpen(setValue)

    }

    const commonStyle = "px-3 md:px-10"
    return (
        <header className='sticky top-0 z-50 w-full border-b border-gray-300 bg-white/80 backdrop-blur-md'>


            <nav className={`py-3 ${commonStyle}  flex justify-between items-center`}>

                

                {/* Left: Mobile Hamburger Menu Toggle */}

            <div className='md:hidden w-4'>
                <img src={HamburgerMenu} alt="" className={`${isOpen ? 'hidden' : 'inline-block'} max-h-8 `} onClick={()=>handleMenuIcon(true)}/>

                <IoMdClose  className={`${isOpen ? 'inline-block' : 'hidden'} max-h-8 `}  onClick={()=>handleMenuIcon(false)}/>


            </div>
                

                

                <img src={Logo} alt="" className='max-h-8 md:max-h-12'/>   


                <div className='hidden md:inline-block'>
                    <ul className='flex gap-2 items-center font-semibold text-md lg:text-2xl lg:gap-4'>
                        <li className='text-[#db2777]'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div> 

                <div className='flex gap-2 md:gap-4 text-md md:text-xl font-semibold'>
                    <button>Sign In</button>
                    <button className='bg-[#d91b7e] px-3 py-1 rounded-4xl text-white'>Sign Up</button>

                </div>     


                           

            </nav>

            {/* Mobile Dropdown Drawer Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                    <ul className="flex flex-col gap-1 pb-3 pt-2 text-base font-medium text-gray-600 border-t border-gray-100">
                        <li>
                            <a href="#home" className="block px-3 py-2 rounded-lg text-[#db2777] bg-pink-50/50 font-semibold">Home</a>
                        </li>
                        {['Technologies', 'Projects', 'About', 'Contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase()}`} className="block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-50 transition-colors">
                                    {item}
                                </a>
                            </li>
                        ))}
                        
                    </ul>
                </div>
        </header>
    );
};