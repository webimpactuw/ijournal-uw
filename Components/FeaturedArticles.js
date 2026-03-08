import localFont from "next/font/local";

const batmipItalic = localFont({
  src: "../assets/Fonts/BATMIP1.41-Italic.otf",
});
const batmipBook = localFont({
  src: "../assets/Fonts/BATMIP1.41-Book.otf",
});

export default function FeaturedArticles() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-[min(92vw,1300px)]">
        <h2
          className={`${batmipItalic.className} text-[45px] leading-none tracking-[-0.02em] text-[#660c64]`}
        >
          Featured Articles
        </h2>

        <div className="mt-3 mb-24 h-px w-full bg-[#d9ccd8]" />

        <a
          href="/articles"
          className={`${batmipBook.className} inline-flex text-[30px] text-[#660c64] underline transition-colors duration-500 hover:text-[#f77ca6]`}
        >
          Read More <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}