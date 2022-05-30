import Logo from '../assets/logo.png'

function Navbar() {
    return(
            <div className='w-[1140px] mx-auto'>
                <div className='flex justify-between p-4'>
                    <img className='scale-50' src={Logo} alt="HeaderLogo"/>
                    <div className='flex justify-around w-7/12 p-4 font-semibold'>
                        <button className='hover:text-main-blue'>Home</button>
                        <button className='hover:text-main-blue'>Why</button>
                        <button className='hover:text-main-blue'>Features</button>
                        <button className='hover:text-main-blue'>Screenshots</button>
                        <button className='hover:text-main-blue'>Pricing</button>
                        <button className='hover:text-main-blue'>Download</button>
                    </div>
                </div>
            </div>

    )
}
export default Navbar