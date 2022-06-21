import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Why from "./components/Why/Why";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Download from "./components/Download";
import Screenshots from "./components/Screenshots";

function App() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div className='w-full'>
        {
            loading 
            ?   <div className="w-full h-screen flex justify-center bg-white items-center">
                    <HashLoader color={'#CC694F'} loading={loading} size={150} />
                </div>

            :   <div>
                    <Navbar />
                    
                    <Home />
                    <Why />
                    <Features />
                    <Screenshots />
                    <Download />
                    <Footer />
                </div>
        }
        </div>
    )
}

export default App;
