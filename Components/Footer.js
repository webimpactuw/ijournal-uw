"use client"
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
    return(
        <footer className="bg-footer w-full py-8 md:py-13 px-16 relative z-0">
            <div className="-mt-6">
                <div className="flex flex-col items-center mb-6">
                    <img src="../logos/iJournal_Cursor.svg" alt="footer image"/>
                </div>
                
                {/* Mobile */}
                <motion.p style={{ fontFamily: 'Batmip-Book', fontStyle: 'normal', fontSize: '6.5vw', lineHeight: '1.3', marginLeft: '0.2rem' }} className="block md:hidden font-medium text-footerText text-left">
                    <Link href="/" className="italic underline transition-colors hover:text-pink-400">iJournal</Link>{" "}
                    is the UW iSchool's{" "}
                    <Link href="/about" className="italic underline transition-colors hover:text-pink-400">student-led</Link>{" "}
                    <Link href="/articles" className="italic underline transition-colors hover:text-pink-400">publication</Link>.{" "}
                    Find us on{" "}
                    <a href="https://www.instagram.com/ijournal.uw" className="italic underline transition-colors hover:text-pink-400">Instagram</a>{" "}
                    or{" "}
                    <a href="mailto:ijournaluw@gmail.com" className="italic underline transition-colors hover:text-pink-400">email us</a>.{" "}
                    ©2026.
                </motion.p>

                {/* Desktop */}
                <motion.p style={{ fontFamily: 'Batmip-Book', fontStyle: 'normal', fontSize: 'clamp(1.6rem, 2.4vw, 2.4rem)', lineHeight: '1.2', marginLeft: 'clamp(2rem, 8vw, 8rem)' }} className="hidden md:block font-medium text-footerText text-left max-w-7xl">
                    <Link href="/" className="italic underline transition-colors hover:text-pink-400">iJournal</Link>{" "}
                    is the UW iSchool's{" "}
                    <Link href="/about" className="italic underline transition-colors hover:text-pink-400">student-led</Link>{" "}
                    <Link href="/articles" className="italic underline transition-colors hover:text-pink-400">publication</Link>.{" "}
                    Find us on{" "}
                    <a href="https://www.instagram.com/ijournal.uw" className="italic underline transition-colors hover:text-pink-400">Instagram</a>{" "}
                    or{" "}
                    <a href="mailto:ijournaluw@gmail.com" className="italic underline transition-colors hover:text-pink-400">email us</a>.{" "}
                    ©2026.
                </motion.p>
            </div>
        </footer>
    );
}