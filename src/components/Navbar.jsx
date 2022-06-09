import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll'
import ButtonToTop from "./ButtonToTop";
import { useTranslation  } from "react-i18next";

import Dropdown from "./Dropdown";


function Navbar() {

    const { t } = useTranslation()

    const [navMenu, setNavMenu] = useState(false)
    const [scrolled, setScrolled] = useState(0)


    const handleNav = () => {
        setNavMenu(!navMenu)
    }

    

    useEffect(() => {
        const onScroll = () => setScrolled(window.pageYOffset)
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return(
        <div
            className={`sticky z-10 top-0 relative text-gray-paragraph1 py-[35px] transition-all duration-300    
            ${scrolled>=1 ? 'ease-in-out duration-500 bg-white py-[10px] shadow-md' : ''}
            `}
        >
            <div className='max-w-[1140px] mx-auto flex justify-between items-center px-4'>
                <span className='text-5xl font-bold text-orange-600'>xizmat</span>
                <Link to="home" offset={-70} className={`transition ease-in-out duration-500 ${scrolled < 1000 ? 'opacity-0' : 'opacity-100'}`}>
                    <ButtonToTop />
                </Link>
                <ul className={`hidden font-semibold cursor-pointer items-center lg:flex ${navMenu ? 'hidden' : ''}`}>
                    <li className='px-4 hover:text-main-blue'>
                        <Link activeClass="active" to={`${scrolled>=1 ? 'home' : ''}`} offset={-70} spy>
                            {t('Home')}
                        </Link>
                    </li>
                    <li className='px-4 hover:text-main-blue'>
                        <Link activeClass="active" to="why" offset={-130} spy>
                            {t('Why')}
                        </Link>
                    </li>
                    <li className='px-4 hover:text-main-blue'>
                        <Link activeClass="active" to="features" offset={-70} spy>
                            {t('Features')}
                        </Link>
                    </li>
                    <li className='px-4 hover:text-main-blue'>
                        <Link activeClass="active" to="screenshots" offset={-130} spy>
                            {t('Screenshots')}
                        </Link>
                    </li>
                    <li className='px-4 hover:text-main-blue'>
                        <Link activeClass="active" to="download" offset={-70} spy>
                            {t('Download')}
                        </Link>
                    </li>
                    <li>
                        <Dropdown />
                    </li>
                    
                </ul>
                <div className="flex items-center lg:hidden">
                    <div className="">
                    </div>
                    <div onClick={handleNav} className='cursor-pointer'>
                        { navMenu ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} /> }
                    </div>
                </div>
                <div className={`absolute left-0 z-10 bg-white w-full shadow-2xl ease-in-out transition-all duration-500 
                    ${navMenu ? scrolled>=1 ? 'top-[65px]' : 'top-[90px]' : 'top-[-2000px]'}
                `}>
                    <ul className='p-4 font-semibold text-2xl select-none cursor-pointer'>
                        <li className='p-4 hover:text-main-blue'>
                            <Link onClick={handleNav} activeClass="active" to={`${scrolled>=1 ? 'home' : ''}`} offset={-70} spy>
                                {t('Home')}
                            </Link>
                        </li>
                        <li className='p-4 hover:text-main-blue'>
                            <Link onClick={handleNav} activeClass="active" to="why" offset={-70} spy>
                                {t('Why')}
                            </Link>
                        </li>
                        <li className='p-4 hover:text-main-blue'>
                            <Link onClick={handleNav} activeClass="active" to="features" offset={-70} spy>
                                {t('Features')}
                            </Link>
                        </li>
                        <li className='p-4 hover:text-main-blue'>
                            <Link onClick={handleNav} activeClass="active" to="screenshots" offset={-70} spy>
                                {t('Screenshots')}
                            </Link>
                        </li>
                        <li className='p-4 hover:text-main-blue'>
                            <Link onClick={handleNav} activeClass="active" to="download" offset={250} spy>
                                {t('Download')}
                            </Link>
                        </li>
                        <li className='p-2 hover:text-main-blue' onClick={handleNav}>
                            <Dropdown />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar