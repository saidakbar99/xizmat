import WhyCard from "./WhyCard";
import WhySection2 from "./WhySection2";
import why1 from '../../assets/why-1.svg'
import why2 from '../../assets/why-2.svg'
import why3 from '../../assets/why-3.svg'
import why4 from '../../assets/why-4.svg'



function Why() {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto lg:text-center my-32 px-2'>
                <div className='text-center items-center'>
                    <p className='text-[22px] font-semibold text-gray-paragraph1 lg:text-4xl'>Why You Should Choose AppLand</p>
                    <p className='my-5 text-gray-paragraph2 lg:w-2/3 mx-auto'>
                        Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor comprehensam at vis. Vel ut percipitur dignissim signiferumque.
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 '>
                    <WhyCard
                        img={why1}
                        title='Clean Design'
                        description='Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam nonumy.'
                    />
                    <WhyCard
                        img={why2}
                        title='Easy to Use'
                        description='Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam nonumy.'
                    />
                    <WhyCard
                        img={why3}
                        title='Fast Loading'
                        description='Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam nonumy.'
                    />
                    <WhyCard
                        img={why4}
                        title='All Elements'
                        description='Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam nonumy.'
                    />
                </div>
            </div>
            <WhySection2 />
        </div>
    )
}
export default Why