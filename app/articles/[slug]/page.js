import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import localFont from "next/font/local";

const batmipBook = localFont({
  src: "../../../assets/Fonts/BATMIP1.41-Book.otf",
});

const EBGaramondVariable = localFont({
  src: "../../../assets/Fonts/EBGaramond-VariableFont_wght.ttf",
});

const EBGaramondItalic = localFont({
  src: "../../../assets/Fonts/EBGaramond-Italic-VariableFont_wght.ttf",
});

const DMMonoRegular = localFont({
  src: "../../../assets/Fonts/DMMono-Regular.ttf",
});

const components = {
    types: {
        image: ({ value }) => {
        if (!value?.asset) return null;

        return (
            <figure className="my-14">
            <Image
                src={urlFor(value).auto("format").url()}
                alt={value.alt || "Article image"}
                width={1200}
                height={800}
                className="mx-auto h-auto w-full max-w-180 object-contain"
            />
            {value.caption && (
                <figcaption className="mt-3 text-center text-sm text-gray-500">
                {value.caption}
                </figcaption>
            )}
            </figure>
        );
        },
    },

    block: {
        normal: ({ children }) => (
        <p className="mb-8 text-[23px] leading-tight text-[#1f1f1f]">
            {children}
        </p>
        ),

        blockquote: ({ children }) => (
        <blockquote className="my-12 text-[23px] italic leading-relaxed text-[#d04a6c]">
            {children}
        </blockquote>
        ),
    },

    marks: {
        link: ({ children, value }) => {
        const rel = !value.href.startsWith("/") ? "noopener noreferrer" : undefined;

        return (
            <a
            href={value.href}
            rel={rel}
            className="underline text-[#1f1f1f] hover:text-[#f77ca6] duration-400 transition-colors"
            >
            {children}
            </a>
        );
        },
    },
};

const creditComponents = {
  block: {
    normal: ({ children }) => (
      <p className={`${DMMonoRegular.className} mb-2 text-[16px] leading-tight text-[#1f1f1f]`}>
        {children}
      </p>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel =
        value?.href && !value.href.startsWith("/")
          ? "noopener noreferrer"
          : undefined;

      return (
        <a
          href={value.href}
          rel={rel}
          className="underline text-[#1f1f1f] hover:text-[#f77ca6] transition-colors duration-400"
        >
          {children}
        </a>
      );
    },
  },
};

async function getArticle(slug) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
    _id,
    category,
    title,
    subtitle,
    author,
    publishDate,
    content,
    credits,
    image,
    "slug": slug.current
  }`;

  return await client.fetch(query, { slug });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full">
        <section className="bg-[#e8d5d8]">
            <div className="mx-auto grid min-h-190 w-[min(92vw,1200px)] grid-cols-1 items-center gap-16 py-60 md:grid-cols-2">
                <div className="max-w-170">

                    <h3 className={`font-serif ${DMMonoRegular.className} mb-4 leading-[1.02] tracking-[-0.03em] text-[#7a1b74]`}> 
                        {article.category?.toUpperCase()}
                    </h3>

                    <h1 className={`font-serif ${batmipBook.className} mt-10 mb-4 text-[45px] leading-[1.02] tracking-[-0.03em] text-[#7a1b74]`}>
                        {article.title}
                    </h1>

                    <h2 className={`font-serif ${EBGaramondItalic.className} mb-10 text-[25px] italic leading-[1.2] text-[#7a1b74]`}>
                        {article.subtitle}
                    </h2>

                    <p className={`${DMMonoRegular.className} text-[18px] text-[#b07aa8]`}>{article.author}</p>
                    <p className={`${DMMonoRegular.className} text-[18px] text-[#b07aa8]`}>
                    {new Date(article.publishDate + "T12:00:00Z").toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                    })}
                    </p>
                </div>

                <div className="flex justify-center md:justify-end">
                    {article.image?.asset ? (
                    <Image
                        src={urlFor(article.image).auto("format").url()}
                        alt={article.title || "Article image"}
                        width={700}
                        height={700}
                        className="h-auto w-full max-w-130 bg-[#efefef] object-contain"
                    />
                    ) : (
                    <div className="h-130 w-full max-w-130 bg-[#efefef]" />
                    )}
                </div>
            </div>
        </section>

        <section className="bg-white">
            <div className={`${EBGaramondVariable.className} text-[10px] mx-auto w-[min(92vw,650px)] py-24`}>
                <article>
                    <PortableText value={article.content} components={components} />
                </article>
                <h2 className={`font-serif ${DMMonoRegular.className} mb-10 text-[15px] leading-[1.2] text-[#1f1f1f]`}>
                    <PortableText value={article.credits} components={creditComponents} />
                </h2>
            </div>
        </section>
    </main>
  );
}