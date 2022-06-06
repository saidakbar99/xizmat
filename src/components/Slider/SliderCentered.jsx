import {useState} from "react";
import Slider from "react-slick";
import './slider.css'

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import slide1 from '../../assets/Xizmat-black-T-shirt-white.png';
import slide2 from '../../assets/Xizmat-white-cap-color.png';
import slide3 from '../../assets/Xizmat-white-T-shirt-color.png';


const sliderImages = [slide1,slide2,slide3]

function SliderCentered() {

    const [imageIndex, setImageIndex] = useState(0)

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const settings = {
        className: "center",
        lazyLoad: true,
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }

    return(
        <div className='w-1/2 mx-auto h-[570px]'>
            <Slider {...settings}>
                {
                    sliderImages.map((img, idx) => {
                        return(
                            <div key={idx} className={`slide ${imageIndex === idx ? 'activeSlide' : ''}`}>
                                <img src={img} alt={img}/>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SliderCentered
//<div className='aspect-w-16 aspect-h-9 flex w-1/2 overflow-hidden'>
// {
//     sliderImages.map((btn,key) => {
//         return (
//             <div>
//                 <div>
//                     <img className='transition' key={key} src={sliderImages[key]} alt="slider"/>
//                     <input name='radio-btn' className='hidden' type="radio"/>
//                 </div>
//                 <label onClick={() => changeSlide(key)} key={key} type="radio" name='radio-btn' id={key.toString()}/>
//             </div>
//         )
//     })
// }
//                </div>