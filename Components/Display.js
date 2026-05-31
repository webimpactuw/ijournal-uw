"use client"

import { useEffect, useState } from "react";
import NavBar from "./Navbar"
import { motion } from "motion/react";
import Footer from "./Footer";

export default function Intro({ children }) {
    const [mounted, setMounted] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        setMounted(true);

        const alreadyPlayed = sessionStorage.getItem("intro-played");

        if (!alreadyPlayed) {
            setShowLoader(true);

            const timer = setTimeout(() => {
                setShowLoader(false);
                sessionStorage.setItem("intro-played", "true");
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, []);

    if (!mounted) {
        return null;
    }

    return(
        <>
            {showLoader ? (
                <div className="flex justify-center items-center h-screen pointer-events-none bg-[rgb(254,252,253)]">
                    <video src="/logos/Loading_Animation.mp4" 
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
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <NavBar />
                        {children}
                    <Footer />
                </motion.div>
            )}
        </>
    )
}