import Button from "../Button"
import Spark from "../../assets/Xizmat-Spark.png"

function WhySection2() {
    return(
        <div className=' bg-features-bg'>
            <div className='max-w-[1140px] mx-auto pb-32 px-4 pt-8 flex flex-wrap lg:flex-nowrap items-center'>
                <img className='lg:w-1/2' src={Spark} alt="spark"/>
                <div className='px-12 mt-32'>
                    <p className='text-2xl lg:text-4xl font-semibold text-gray-paragraph1'>Comes With All You Need.</p>
                    <p className='my-5 text-gray-paragraph2'>
                        Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde consulatu percipitur, meis dolor comprehensam at vij. Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel ut dignissim signiferumq nusquam.
                    </p>
                    <Button title='Get The App' />
                </div>
            </div>
        </div>
    )
}

export default WhySection2