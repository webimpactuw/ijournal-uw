"use client"
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Image from "next/image"
import Illustration from "../assets/Logo/landingpage_illustration.png"
import Logo from '../assets/Logo/iJournal_Logo.svg';

export default function Homepage() {
    return(
        <div className="w-full relative min-h-screen flex justify-start items-start overflow-hidden">
            <Image className="absolute z-[-1] object-cover" fill src={Illustration} alt="iJournal landing page background"/>
            
            <div className="absolute w-7/24 top-60 left-255 px-6 py-8">
                <Image className="" src={Logo} alt="iJournal logo" />
                <p className="left-10 text-center" >The UW iSchool's first student-led journal</p>
            </div>

            <div className="absolute top-120 left-155 max-w-1/5">
                <p className="">I saw my life branching out 
                    before me like the green 
                    fig tree in the story.</p>
                <div className="relative top-10 left-35 text-right">
                    <p>From the tip of every 
                        branch, like a fat purple fig,
                        a wonderful future beckoned.</p>
                    
                    <p>SYLVIA PLATH, THE BELL JAR</p>
                </div>
            </div>
        </div>
    );
}