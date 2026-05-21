import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

async function getJournals() {
  return client.fetch(`
    *[_type == "journal"] {
      _id, title, coverImage, edition, slug
    }
  `)
}

export default async function Journals() {
  const journals = await getJournals();
  return (
    <div className="bg-white text-navBar font-garamond text-4xl py-16">
      <div className="mx-auto w-[min(80vw,1300px)]">
        <h1 className="">Every school year, the iJournal team works to curate a collection of our favorite articles published throughout the quarter!</h1>
        <h1 className="mt-15 font-batmip italic text-[45px] border-b border-[#d9ccd8]">Journals</h1>

        <div className="h-8"></div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {journals.map((journal) => (
            <Link
              key={journal._id}
              href={`/journals/${journal.slug.current}`}
              className="flex flex-col items-start group"
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded shadow-sm">
                {journal.coverImage && (
                  <Image
                    src={urlFor(journal.coverImage).width(400).height(533).url()}
                    alt={journal.title}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <p className="mt-2 text-lg text-navBar font-garamond">
                {journal.title}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </div>  
  );
}
