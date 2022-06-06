// import {useState} from "react";
import Slider from "react-slick";

import slide1 from '../assets/Xizmat-black-T-shirt-white.png';
import slide2 from '../assets/Xizmat-white-cap-color.png';
import slide3 from '../assets/Xizmat-white-T-shirt-color.png';

const sliderImages = [slide1,slide2,slide3]
function SliderCentered() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    // const [currentSlide, setCurrentSlide] = useState(0)
    //
    // const changeSlide = (id) => {
    //     setCurrentSlide(id)
    // }
    return(
        <div className='select-none relative container max-w-[1140px] mx-auto px-4'>
            <Slider {...settings}>
                {
                    sliderImages.map((img, idx) => {
                        return(
                            <div key={idx}>
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