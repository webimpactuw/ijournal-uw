"use client"

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function HomeDisplay({ children }) {
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState(5);
    const timer = useRef(null);

    const pathname = usePathname();

    //Counts down and then switches to the main content of the homepage
    useEffect(() => {
        if (time > 0) {
            timer.current = setInterval(() => {
                setTime(prev => prev - 1);
            }, 1000);
        }
        
        if (time == 0) {
            setLoading(false);
            clearInterval(timer.current);
        }

        return () => clearInterval(timer.current);
    }, [time]);


    return(
        <>
            {(loading) && (
                <div className="flex justify-center items-center h-screen pointer-events-none bg-[rgb(254,252,253)]">
                    <video src="logos/Loading_Animation.mp4" 
                        //autoplay, muted and loop allow the file to run until timer runs out loop
                        autoPlay
                        muted
                        loop

                        playsInline //no phone behavior
                        controls={false} //makes no controls show like pause or volume
                        disablePictureInPicture //disables picture in picture
                        disableRemotePlayback //stops airplay options
                        width="430" 
                        height="430"
                    />
                </div>
            )}
            {(!loading) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <Navbar />
                        {children}
                    <Footer />
                </motion.div>
            )}
        </>
    )
}

