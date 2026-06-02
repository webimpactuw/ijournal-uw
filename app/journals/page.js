'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import localFont from "next/font/local";

import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';

const JournalFlipBook = dynamic(() => import('./JournalFlipbook'), { ssr: false });

const dmMonoBasic = localFont({
  src: "../../assets/Fonts/DMMono-Regular.ttf",
});

export default function Journals() {
  const [journals, setJournals] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "journal"] | order(edition desc) {
        _id,
        title,
        coverImage,
        edition,
        slug,
        "pdfUrl": pdf.asset->url
      }`)
      .then(setJournals)
      .catch(console.error);
  }, []);

  function closeJournal() {
    setSelectedJournal(null);
  }

  return (
    <div className="bg-white text-navBar font-garamond text-4xl py-16 logo-cursor">
      <div className="mx-auto w-full max-w-[1300px] max-sm:w-[80vw] max-sm:px-8">

        <h1 className="max-sm:text-[1.75rem] max-sm:leading-tight">
          Every school year, the iJournal team works to curate a collection of
          our favorite articles published throughout the quarter!
        </h1>

        <h1 className="mt-15 font-batmip italic text-[45px] border-b border-[#d9ccd8] max-sm:text-left max-sm:w-full max-sm:pr-8">
          Journals
        </h1>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-sm:grid-cols-1 max-sm:justify-items-start">

          {journals.map((journal) => (
            <motion.button
              key={journal._id}
              onClick={() => setSelectedJournal(journal)}
              className="flex flex-col items-start text-left max-sm:w-[230px]"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >

              <motion.div
                className="w-full aspect-[3/4] overflow-hidden rounded shadow-sm"
                variants={{
                  rest: { boxShadow: '0 0 0px 0px rgba(244, 114, 182, 0)' },
                  hover: { boxShadow: '0 0 10px 4px rgba(244, 114, 182, 0.6)' },
                }}
                transition={{ duration: 0.2 }}
              >
                {journal.coverImage && (
                  <Image
                    src={urlFor(journal.coverImage).width(400).height(533).url()}
                    alt={journal.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>

              <p className={`${dmMonoBasic.className} mt-2 text-[16px] leading-tight max-w-[230px] text-[#b55273]`}>
                {journal.title}
              </p>

            </motion.button>
          ))}

        </div>
      </div>

      {selectedJournal && (
        <JournalFlipBook
          pdfUrl={selectedJournal.pdfUrl}
          title={selectedJournal.title}
          onClose={closeJournal}
        />
      )}
    </div>
  );
}