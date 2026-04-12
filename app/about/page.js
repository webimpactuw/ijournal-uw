"use client"; 
import localFont from "next/font/local";
import NextImage from "next/image";
import { motion } from "motion/react";

const batmipItalic = localFont({
  src: "../../assets/Fonts/BATMIP1.41-Italic.otf",
});

const ebGaramondBasic = localFont({
  src: "../../assets/Fonts/EBGaramond-VariableFont_wght.ttf",
});

const ebGaramondItalic = localFont({
  src: "../../assets/Fonts/EBGaramond-Italic-VariableFont_wght.ttf",
});

const dmMonoBasic = localFont({
  src: "../../assets/Fonts/DMMono-Regular.ttf",
});

export default function About() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-[min(92vw,1300px)]">
        <h2
          className={`${batmipItalic.className} text-[45px] leading-none tracking-[-0.02em] text-[#660c64]`}>
          About Us
        </h2>
        <div className="mt-3 mb-8 h-px w-full bg-[#d9ccd8]" />

        <motion.p className={`${ebGaramondBasic.className} text-[#660c64] text-[34px] font-medium leading-snug mb-16 max-w-6.5xl`}>
          iJournal is the University of Washington Information School's{" "}
          <em className={ebGaramondItalic.className}>student-driven publication</em> dedicated to encouraging{" "}
          <em className={ebGaramondItalic.className}>critical dialogue, innovative ideas, and diverse perspectives.</em>
        </motion.p>

        <div className="flex gap-16 items-start">
          <motion.div className={`${ebGaramondBasic.className} flex-1 max-w-[710px] mt-22 space-y-4 text-black text-[22px] leading-snug`}>
            <p>
              We provide a platform for students to share thought pieces, research, opinions, and creative works that explore ideas at 
              the intersection of technology, information, and society. Our mission is to amplify student voices, inspire collaboration, 
              and advance interdisciplinary conversations. We hope to challenge assumptions, promote equity, and envision a more informed, 
              connected, and fair world. 
            </p>
            <p>
              We encourage undergraduate students of all identities across all disciplines to submit written works that align with our mission. 
              Opportunities to submit written works to iJournal will open up every quarter to ensure students have as many chances at being 
              published as possible. If you are interested in getting involved, check out our Instagram page for open positions during the fall 
              quarter!
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-3 shrink-0 ml-8">
            <NextImage src="/executive_board.jpg" alt="2024-2025 iJournal Executive Board" width={460} height={520} className="rounded object-cover" />
            <p className={`${dmMonoBasic.className} text-[16px] text-black`}>
              2024-2025 iJournal Executive Board
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
