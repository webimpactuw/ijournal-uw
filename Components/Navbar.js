"use client"
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  //Makes sure the navbar dropdown is closed when a new page loads
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  //Makes sure the navbar closes when the screen gets too big
  useEffect(() => {
    const screenWatcher = window.matchMedia("(min-width: 768px)");

    const handleResize = (e) => {
      if (e.matches) {
        setOpen(false);
      }
    };

    screenWatcher.addEventListener("change", handleResize);

    return () => {
      screenWatcher.removeEventListener("change", handleResize);
    };
  })

  if(!pathname.startsWith("/studio")) {  
    return (
      <nav className="w-full sticky top-0 bg-navBar z-10">
        <motion.div className="mx-auto flex max-w-7xl items-center justify-between p-3">
          {/* Logo / Brand */}

          <a href="/" className={`text-xl font-semibold tracking-tight text-black ml-2`}>
            <motion.img 
              className={`duration-400 ${open ? "rotate-10 w-10 h-10" : "w-10 h-10"}`}
              src={"/logos/iJournal_Cursor.svg"}
              alt="IJournal Open logo"
              whileHover={{rotate: 10, scale: 1.3}}
            />
            </a>

          {/* Nav links */}
          <div className="hidden md:flex gap-12 text-lg font-medium text-white pr-10 font-mono">
            <Link
              href="/"
              className="transition-colors hover:text-pink-400"
            >
              HOME
            </Link>
            <Link
              href="/articles"
              className="transition-colors hover:text-pink-400"
            >
              ARTICLES
            </Link>
            <Link
              href="/journals"
              className="transition-colors hover:text-pink-400"
            >
              JOURNALS
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-pink-400"
            >
              ABOUT
            </Link>
          </div>
          
          {/*Hamburger button for small screens*/}
          <motion.button 
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col space-y-1 justify-end cursor-pointer mr-10"
          >
            <motion.div
              animate={open ? {rotate: 45, translateY: 8} : {}}
              className="w-6 h-0.5 bg-white"
            />
            <motion.div
              animate={open ? {opacity: 0} : {}}
              transition={{duration: 0.1}}
              className="w-6 h-0.5 bg-white"
            />
            <motion.div
              animate={open ? {rotate: -45, translateY: -4} : {}}
              className="w-6 h-0.5 bg-white"
            />
          </motion.button>
        </motion.div>

        {/*Dropdown menu for the hamburger icon*/}
        <div 
          className={`md:hidden overflow-hidden absolute w-full bg-navBar text-5xl text-white font-batmip px-4 shadow-2xl duration-400 font-
            ${open ? "max-h-96" : "max-h-0"}`}
        >
          <i>
          <div className="max-w-7xl mx-auto py-6 border-b-2 border-dropDownBorder">
            <a 
              className="px-3 w-1 cursor-pointer duration-500 hover:text-pink-400" 
              href="/"  
            >
              Home
            </a>
          </div>
            
          <div className="max-w-7xl mx-auto py-6 border-b-2 border-dropDownBorder">
            <a 
              className="px-3 w-1 cursor-pointer duration-500 hover:text-pink-400" 
              href="/articles"  
            >
              Articles
            </a>
          </div>
          
          <div className="max-w-7xl mx-auto py-6 border-b-2 border-dropDownBorder">
            <a 
              className="px-3 w-1 cursor-pointer duration-500 hover:text-pink-400" 
              href="/journals"  
            >
              Journals
            </a>
          </div>

          <div className="max-w-7xl mx-auto py-6">
            <a 
              className="px-3 w-1 cursor-pointer duration-500 hover:text-pink-400" 
              href="/about"  
            >
              About
            </a>
          </div>
          </i>
        </div>
        
      </nav>
    );
  }
}