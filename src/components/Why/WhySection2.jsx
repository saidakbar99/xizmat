import Spark from "../../assets/Xizmat-Spark.png"
import { useTranslation } from "react-i18next";

function WhySection2() {
    const { t } = useTranslation()
    return(
        <div className=' bg-features-bg'>
            <div className='max-w-[1140px] mx-auto px-4 py-8 flex flex-wrap items-center lg:flex-nowrap lg:pb-32'>
                <img className='lg:w-1/2' src={Spark} alt="spark"/>
                <div className='px-12 mt-4 lg:mt-32'>
                    <p className='text-2xl lg:text-4xl font-semibold text-gray-paragraph1'>{t('Comes With All You Need')}</p>
                    <p className='my-5 text-gray-paragraph2'>
                        Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde consulatu percipitur, meis dolor comprehensam at vij. Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq nusquam.
                    </p>
                    <button className='bg-main-blue py-4 px-6 rounded text-white mr-12 transition duration-200 ease-out hover:ease-in hover:bg-light-blue'>
                        {t('Download Now')}
                    </button>
                </div>
            </div>
        </div>
    )
} 

export default WhySection2