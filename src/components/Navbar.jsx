import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [navMenu, setNavMenu] = useState(false)

    const handleNav = () => {
        setNavMenu(!navMenu)
    }

    return(
            <div className='container max-w-[1140px] mx-auto flex justify-between items-center px-4 lg:px-20 h-24 relative text-gray-paragraph1'>
                <span className='text-5xl font-bold text-orange-600'>xizmat</span>
                <ul className={`hidden font-semibold cursor-pointer lg:flex ${navMenu ? 'hidden' : ''}`}>
                    <li className='p-4 hover:text-main-blue'>Home</li>
                    <li className='p-4 hover:text-main-blue'>Why</li>
                    <li className='p-4 hover:text-main-blue'>Features</li>
                    <li className='p-4 hover:text-main-blue'>Screenshots</li>
                    <li className='p-4 hover:text-main-blue'>Pricing</li>
                    <li className='p-4 hover:text-main-blue'>Download</li>
                </ul>
                <div onClick={handleNav} className='cursor-pointer block lg:hidden'>
                    { navMenu ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} /> }
                </div>
                <div className={`absolute left-0 z-10 bg-white w-full shadow-2xl ease-in-out duration-500 ${navMenu ? 'top-[70px]' : 'top-[-400px]'}`}>
                    <ul className='p-4 font-semibold text-2xl'>
                        <li className='p-2 hover:text-main-blue'>Home</li>
                        <li className='p-2 hover:text-main-blue'>Why</li>
                        <li className='p-2 hover:text-main-blue'>Features</li>
                        <li className='p-2 hover:text-main-blue'>Screenshots</li>
                        <li className='p-2 hover:text-main-blue'>Pricing</li>
                        <li className='p-2 hover:text-main-blue'>Download</li>
                    </ul>
                </div>
            </div>

    )
}
export default Navbar