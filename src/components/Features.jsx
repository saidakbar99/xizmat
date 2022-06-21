import { useTranslation  } from "react-i18next";
import Screenshot from "../assets/screenshot.png"
import why1 from '../assets/why-1.svg'
import why2 from '../assets/why-2.svg'
import why3 from '../assets/why-3.svg'

function Features() {
    const { t } = useTranslation()
    return(
        <div id="features" className="max-w-[1140px] mx-auto py-4 lg:py-12">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl lg:text-4xl text-gray-paragraph1 font-semibold">{t('Awesome Key Features')}</h1>
                {/* <p className="text-gray-paragraph1 mt-5 lg:w-2/3">Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor comprehensam at vis. Vel ut percipitur dignissim signiferumque.</p> */}
            </div>
            <div className="lg:flex items-center">
                <div className="lg:w-1/2 flex flex-col px-4">
                    <div className='flex items-center p-8 mt-8 shadow-custom ease-in-out hover:shadow-lg duration-300 cursor-pointer'>
                        <img className="w-16" src={why1} alt="test" />
                        <div className="pl-6">
                            <h3 className='text-[25px] text-gray-paragraph1 font-medium'>Fully Responsive</h3>
                            <p className="text-gray-paragraph2">Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam nonumy eirmod.</p>
                        </div>
                    </div>
                    <div className='flex items-center p-8 mt-8 shadow-custom ease-in-out hover:shadow-lg duration-300 cursor-pointer'>
                        <img className="w-16" src={why2} alt="test" />
                        <div className="pl-6">
                            <h3 className='text-[25px] text-gray-paragraph1 font-medium'>Refreshing Design</h3>
                            <p className="text-gray-paragraph2">Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam nonumy eirmod.</p>
                        </div>
                    </div>
                    <div className='flex items-center p-8 mt-8 shadow-custom ease-in-out hover:shadow-lg duration-300 cursor-pointer'>
                        <img className="w-16" src={why3} alt="test" />
                        <div className="pl-6">
                            <h3 className='text-[25px] text-gray-paragraph1 font-medium'>Bootstrap 5</h3>
                            <p className="text-gray-paragraph2">Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam nonumy eirmod.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 px-4 items-center lg:flex hidden">
                    <img className="w-2/3 mx-auto" src={Screenshot} alt="screenshot" />
                </div>
            </div>
        </div>
    )
}

export default Features