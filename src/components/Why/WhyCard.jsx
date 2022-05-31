function WhyCard({img, title, description}) {
    return (
        <div className='flex flex-col text-center items-center mt-8 px-4'>
            <img className='w-32 h-32' src={img} alt="img"/>
            <p className='text-2xl'>{title}</p>
            <p>{description}</p>
        </div>
    )
}
export default WhyCard