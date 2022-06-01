function WhyCard({img, title, description}) {
    return (
        <div className='flex flex-col text-center items-center mt-8 py-10 px-6 mx-4 shadow-custom ease-in-out
             hover:shadow-xl  hover:duration-1000 cursor-pointer'>
            <img className='w-32 h-32' src={img} alt="img"/>
            <div className='mt-8'>
                <p className='text-2xl mb-7'>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default WhyCard