import playButton from '../assets/play-button.svg'
import Person from '../assets/main-person.png'

function Home() {
    return(
        <div className='w-[1140px] mx-auto mb-32 pt-32 flex'>
            <div className='w-1/2'>
                <p className='text-4xl font-bold text-gray-700 mb-8'>
                    <span className='text-main-blue'>Launch Your App </span>
                    With <br/>
                    Confidence and <br/>
                    Creativity.
                </p>
                <p className='text-lg text-gray-500 mb-8'>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnon umy eirmomp or invidunt ut labore et dolore magna aliquyam eratse diam voluptua. At vero eosaccusam.
                </p>
                <button
                    className='bg-main-blue py-4 px-6 rounded text-white mr-12
                    transition duration-200 ease-out hover:ease-in hover:bg-light-blue'
                >
                    Downlaod Now
                </button>
                <button className='bg-main-blue rounded-full p-4'>
                    <img src={playButton} alt="playButton" />
                </button>
            </div>
            <img className='scale-x-110' src={Person} alt="person"/>
        </div>
    )
}
export default Home