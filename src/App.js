import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Why from "./components/Why/Why";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Download from "./components/Download";
// import SliderCentered from "./components/Slider/SliderCentered";
import SliderMinimalistic from "./components/Slider/SliderMinimalistic";

function App() {
    return (
        <div className='w-full'>
            <Navbar />
            <Home />
            <Why />
            <Features />
            {/* <SliderCentered /> */}
            <SliderMinimalistic />
            <Download />
            <Footer />
        </div>
    )
}

export default App;
