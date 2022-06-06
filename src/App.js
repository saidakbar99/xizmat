import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Why from "./components/Why/Why";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Download from "./components/Download";
// import SliderCentered from "./components/SliderCentered";

function App() {
    return (
        <div className='w-full'>
            <Navbar />
            <Home />
            <Why />
            <Features />
            {/* <SliderCentered /> */}
            <Download />
            <Footer />
        </div>
    )
}

export default App;
