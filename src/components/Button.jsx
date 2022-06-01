function Button({title}) {
    return(
        <button
            className='bg-main-blue py-4 px-6 rounded text-white mr-12
                    transition duration-200 ease-out hover:ease-in hover:bg-light-blue'
        >
            {title}
        </button>
    )
}
export default Button