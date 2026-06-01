import localFont from "next/font/local";
import NextImage from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "motion/react";

const batmipItalic = localFont({
  src: "../../assets/Fonts/BATMIP1.41-Italic.otf",
});

const batmipRegular = localFont({
  src: "../../assets/Fonts/BATMIP1.41-Book.otf",
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

const dmMonoMedium = localFont({
  src: "../../assets/Fonts/DMMono-Medium.ttf",
});

async function getAboutData() {
  const [members, boardData] = await Promise.all([
    client.fetch(`*[_type == "teamMember"] | order(order asc) { _id, name, role, team, photo }`),
    client.fetch(`*[_type == "boardPhoto" && _id == "boardPhoto"][0]{ photo, caption }`)
  ])
  return { members, boardPhoto: boardData?.photo, caption: boardData?.caption }
}

const teams = [
  { key: "executiveTeam", label: "Executive Team" },
  { key: "designTeam", label: "Design Team" },
  { key: "reportingTeam", label: "Reporting Team" },
  { key: "editingTeam", label: "Editing Team" },
  { key: "communicationsTeam", label: "Communications Team" }
]

export default async function About() {
  const { members, boardPhoto, caption } = await getAboutData()
  return (
    <section className="w-full bg-white py-16 logo-cursor">
      <div className="mx-auto w-[min(92vw,1300px)]">
        <h2 className={`${batmipItalic.className} text-[42px] md:text-[45px] leading-none tracking-[-0.02em] text-[#660c64]`}>
          About Us
        </h2>
        <div className="mt-3 mb-8 h-px w-full bg-[#d9ccd8]" />

        <p className={`${ebGaramondBasic.className} text-[#660c64] text-[28px] md:text-[34px] font-medium leading-snug mb-16 max-w-6.5xl`}>
          iJournal is the University of Washington Information School's{" "}
          <em className={ebGaramondItalic.className}>student-driven publication</em> dedicated to encouraging{" "}
          <em className={ebGaramondItalic.className}>critical dialogue, innovative ideas, and diverse perspectives.</em>
        </p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="flex flex-col items-center gap-3 shrink-0 md:order-2 md:ml-8 w-full md:w-auto mx-auto">
            {boardPhoto?.asset ? (
              <>
                <NextImage
                  src={urlFor(boardPhoto).auto('format').url()}
                  alt={boardPhoto.alt ?? "iJournal Executive Board"}
                  loading="eager"
                  priority
                  width={460}
                  height={460}
                  className="rounded object-cover w-full md:w-[460px] mx-auto h-auto"
                />
                {caption && (
                  <p className={`${dmMonoBasic.className} text-[16px] text-black text-center`}>
                    {caption}
                  </p>
                )}
              </>
            ) : null}
          </div>
          <div className={`${ebGaramondBasic.className} flex-1 md:order-1 md:max-w-[710px] md:mt-22 space-y-4 text-black text-[21px] md:text-[22px] leading-snug`}>
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
          </div>
        </div>
        <h2 className={`${batmipItalic.className} text-[45px] leading-none tracking-[-0.02em] text-[#660c64] mt-16 md:mt-2`}>
          2025-2026 Staff
        </h2>
        <div className="mt-3 mb-14 md:mb-8 h-px w-full bg-[#d9ccd8]" />

        {teams.map(({ key, label }) => {
          const teamMembers = members.filter(m => m.team === key);
          if (teamMembers.length === 0) return null;
          return (
            <div key={key} className="mb-26 md:mb-12">
              <h3 className={`${batmipRegular.className} text-[30px] md:text-[34px] text-[#b55273] mb-8 pl-4 md:pl-0`}>
                {label}
              </h3>
              <div className="grid grid-cols-1 gap-x-18 gap-y-14 md:grid-cols-3">
                {teamMembers.map((member) => (
                  <div key={member._id} className="max-w-[280px] mx-auto w-full md:mx-0">
                    {member.photo?.asset ? (
                      <NextImage
                        src={urlFor(member.photo).auto('format').url()}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="w-full aspect-square object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-square bg-[#e8d5d8]" />
                    )}
                    <p className={`${dmMonoMedium.className} mt-3 text-[17px] text-[#1f1f1f]`}>
                      {member.role}
                    </p>
                    <p className={`${dmMonoMedium.className} text-[20px] text-[#b55273]`}>
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}