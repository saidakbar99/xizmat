import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Why from "./components/Why/Why";

function App() {
    return (
        <div className='w-full container mx-auto'>
            <Navbar />
            <Home />
            <Why />
        </div>
    )
}

export default App;
