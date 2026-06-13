"use client"

import { useEffect, useState } from "react";
import NavBar from "./Navbar"
import { motion } from "motion/react";
import Footer from "./Footer";

export default function Intro({ children }) {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
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

    return(
        <>
            {(showLoader) ? (
                <div className="flex justify-center items-center h-screen pointer-events-none bg-[rgb(254,252,253)]">
                    <video src="/logos/Loading_Animation.mp4" 
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                        width="430" 
                        height="430"
                    />
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col min-h-screen"
                >
                    <NavBar />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </motion.div>
            )}
        </>
    )
}