"use client"
import Image from "next/image"
import Illustration from "../assets/Logo/landingpage_illustration.png"
import Logo from '../assets/Logo/iJournal_Logo.svg';

export default function Homepage() {
    return(
        <>
        {/* Mobile */}
        <div
            className="md:hidden w-full relative min-h-screen flex justify-start items-start font-medium font-garamond text-[16pt]"
            style={{
                backgroundImage: `url(${Illustration.src})`,
                backgroundSize: 'cover',
                backgroundPosition: '60% 40%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Mobile logo + tagline */}
            <div className="absolute top-[33%] left-0 right-0 flex flex-col items-center px-3">
                <Image src={Logo} alt="iJournal logo" width={250} height={80}/>
                <p className="text-center text-navBar text-[11pt] mt-2">The UW iSchool's first student-led journal</p>
            </div>

            {/* Mobile quotes */}
            <div className="absolute top-[63%] left-3 right-3 italic font-bold text-main text-[10pt] leading-snug">
                <p>
                    I saw my life branching out<br/>
                    before me like the green<br/>
                    fig tree in the story.
                </p>
                <div className="mt-2 text-right italic">
                    <p>
                        From the tip of every <br/>
                        branch, like a fat purple fig, <br/>
                        a wonderful future beckoned.
                    </p>
                    <p className="font-dm-mono not-italic font-normal text-[8pt]">SYLVIA PLATH, THE BELL JAR</p>
                </div>
            </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex w-full relative min-h-screen justify-start items-start overflow-hidden font-medium font-garamond text-[16pt]">
            <Image className="absolute z-[-1] object-cover object-center" fill src={Illustration} alt="iJournal landing page background"/>

            {/* Desktop logo + tagline */}
            <div className="absolute w-7/24 top-[30%] left-[70%] px-6 py-8">
                <Image className="" src={Logo} alt="iJournal logo" />
                <p className="left-10 text-center text-navBar">The UW iSchool's first student-led journal</p>
            </div>

            {/* Desktop quotes */}
            <div className="absolute top-[65%] left-[42%] max-w-1/4 italic font-bold text-main">
                <p>
                    I saw my life branching out<br/>
                    before me like the green<br/>
                    fig tree in the story.
                </p>
                <div className="relative top-5 left-35 text-right italic">
                    <p>
                        From the tip of every <br/>
                        branch, like a fat purple fig, <br/>
                        a wonderful future beckoned.
                    </p>
                    <p className="font-dm-mono not-italic font-normal text-[12pt]">SYLVIA PLATH, THE BELL JAR</p>
                </div>
            </div>
        </div>
        </>
    );
}