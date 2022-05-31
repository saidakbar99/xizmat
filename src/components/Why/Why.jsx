import WhyCard from "./WhyCard";
import why1 from '../../assets/why-1.svg'
import why2 from '../../assets/why-2.svg'
import why3 from '../../assets/why-3.svg'
import why4 from '../../assets/why-4.svg'


function Why() {
    return (
        <div className='container max-w-[1140px] mx-auto text-center mt-32 px-20'>
            <span className='text-4xl font-semibold text-gray-paragraph1'>Why You Should Choose AppLand</span>
            <p className='w-1/2 mx-auto mt-5 text-gray-paragraph2'>
                Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor comprehensam at vis. Vel ut percipitur dignissim signiferumque.
            </p>
            <div className='flex w-full justify-between columns-4 md:columns-2 sm:columns-1'>
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
    )
}
export default Why