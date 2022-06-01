import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Why from "./components/Why/Why";
import Features from "./components/Features";

function App() {
    return (
        <div className='w-full'>
            <Navbar />
            <Home />
            <Why />
            <Features />
        </div>
    )
}

export default App;
