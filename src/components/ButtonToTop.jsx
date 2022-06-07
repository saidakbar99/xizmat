import { AiFillCaretUp } from 'react-icons/ai';

function ButtonToTop() {
    return(
        <button className="fixed z-20 bottom-20 right-5 lg:bottom-5 w-[35px] h-[35px] bg-main-blue rounded flex items-center justify-center">
            <AiFillCaretUp size={30} color='white'  />
        </button>
    )
}
export default ButtonToTop