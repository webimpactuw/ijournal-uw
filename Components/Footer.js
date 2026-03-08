"use client"
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
    return(
        <footer className="bg-footer w-full py-16 px-16">
            <motion.p style={{ fontFamily: 'Batmip-Book', fontStyle: 'normal', fontSize: '2.4rem' }} className="hidden md:block font-medium text-footerText text-left max-w-7xl ml-32">
                <Link href="/" className="italic underline">iJournal</Link>{" "}
                is the UW iSchool's{" "}
                <Link href="/about" className="italic underline">student-led</Link>{" "}
                <Link href="/articles" className="italic underline">publication</Link>.{" "}
                Find us on{" "}
                <a href="https://www.instagram.com/ijournal.uw" className="italic underline">Instagram</a>{" "}
                or{" "}
                <a href="mailto:ijournaluw@gmail.com" className="italic underline">email us</a>.{" "}
                ©2026.
            </motion.p>
        </footer>
    );
}