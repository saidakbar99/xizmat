import playButton from '../assets/play-button.svg';
import Person from '../assets/main-person.png';
import Button from "./Button";

function Home() {
    
    return(
        <div className='container max-w-[1140px] mx-auto mb-32 pt-4 flex justify-between px-4 lg:pt-32'>
            <div className='lg:w-1/2'>
                <p className='text-[22px] lg:text-4xl font-bold text-gray-700 mb-8 animate-fromLeft1'>
                    <span className='text-main-blue'>Launch Your App </span>
                    With Confidence and Creativity.
                </p>
                <p className='transition delay-300 text-gray-500 mb-8 font-thin animate-fromLeft2 '>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diamnon umy eirmomp or invidunt ut labore et dolore magna aliquyam eratse diam voluptua. At vero eosaccusam.
                </p>
                <div className='flex flex-nowrap animate-fromLeft3'>
                    <Button title='Download Now'/>
                    <a href="https://www.youtube.com/watch?v=gIxcgrZvIO0" rel='noreferrer' target="_blank">
                        <button
                            className='bg-main-blue rounded-full p-4 relative animate-fromLeft4
                            before:bg-main-blue before:rounded-full before:animate-ping2s before:absolute before:w-[70%] before:h-[70%] before:top-2 before:left-[7px] before:z-[-1]'
                        >
                            <img src={playButton} alt="playButton" />
                        </button>   
                    </a>
                </div>
            </div>
            <img className='animate-wiggle scale-x-110 hidden lg:flex' src={Person} alt="person"/>
        </div>
    )
}
export default Home