import localFont from "next/font/local";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const batmipItalic = localFont({
  src: "../assets/Fonts/BATMIP1.41-Italic.otf",
});

const batmipBook = localFont({
  src: "../assets/Fonts/BATMIP1.41-Book.otf",
});

const EBGaramondVariable = localFont({
  src: "../assets/Fonts/EBGaramond-VariableFont_wght.ttf",
});

const DMMonoRegular = localFont({
  src: "../assets/Fonts/DMMono-Regular.ttf",
});

export default function FeaturedArticles({ articles }) {
  return (
    <section className="w-full bg-[#fffcfd] py-16 logo-cursor">
      <div className="mx-auto w-[min(92vw,1300px)]">
        <h2
          className={`${batmipItalic.className} text-[45px] leading-none tracking-[-0.02em] text-[#660c64]`}
        >
          Featured Articles
        </h2>

        <div className="mt-3 mb-3 h-px w-full bg-[#d9ccd8]" />

        <div className="flex-col">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/articles/${article.slug}`}
              className="grid grid-cols-[180px_1fr] items-center gap-8 border-b border-[#e4d7e3] py-10"
            >
              {article.image?.asset ? (
                <Image
                src={urlFor(article.image).auto("format").url()}
                alt={article.title || "Article image"}
                width={1000}
                height={1000}
                className="w-full h-auto rounded"
              />
              ) : (
                <div className="h-30 w-45 rounded bg-[#f3eef2]" />
              )}
              
              <div className ="group transition-colors duration-350">
                <h3 className={`${EBGaramondVariable.className} text-[40px] leading-tight tracking-[-0.02em] text-[#660c64] group-hover:text-[#f77ca6] transition-colors`}>
                  {article.subtitle ? `${article.title}: ${article.subtitle}` : article.title}
                </h3>
                <p className={`${DMMonoRegular.className} text-[17px] leading-none tracking-[-0.02em] text-[#b78ab3] mb-4 mt-4 group-hover:text-[#fabdd3] transition-colors`}>
                  {article.author}
                </p>
                <p className={`${DMMonoRegular.className} text-[17px] leading-none tracking-[-0.02em] text-[#b78ab3] group-hover:text-[#fabdd3] transition-colors`}>
                  {new Date(article.publishDate + "T12:00:00Z").toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/articles"
          className={`${batmipBook.className} mt-10 inline-flex text-[30px] text-[#660c64] underline transition-colors duration-500 hover:text-[#f77ca6]`}
        >
          Read More <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}