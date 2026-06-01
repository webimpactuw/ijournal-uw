'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import JournalFlipBook from './JournalFlipbook';

export default function Journals() {
  const [journals, setJournals] = useState([]);
  const [selectedJournal, setSelectedJournal] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "journal"] | order(edition asc) {
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
      <div className="mx-auto w-[min(80vw,1300px)]">
        <h1>
          Every school year, the iJournal team works to curate a collection of
          our favorite articles published throughout the quarter!
        </h1>

        <h1 className="mt-15 font-batmip italic text-[45px] border-b border-[#d9ccd8]">
          Journals
        </h1>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {journals.map((journal) => (
            <button
              key={journal._id}
              onClick={() => setSelectedJournal(journal)}
              className="flex flex-col items-start group text-left"
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded shadow-sm">
                {journal.coverImage && (
                  <Image
                    src={urlFor(journal.coverImage).width(400).height(533).url()}
                    alt={journal.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <p className="mt-2 text-lg text-navBar font-garamond">
                {journal.title}
              </p>
            </button>
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