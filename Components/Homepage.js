"use client"
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image"
import Illustration from "../assets/Logo/landingpage_illustration.png"

export default function Homepage() {
    return(
        <div className="w-full">
            <Image src={Illustration} alt="iJournal landing page background"/>
        </div>
    );
}