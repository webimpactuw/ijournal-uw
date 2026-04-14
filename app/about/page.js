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

async function getTeamMembers() {
  return client.fetch(`
    *[_type == "teamMember"] | order(order asc) {
      _id, name, role, team, photo
    }
  `)
}

const teams = [
  { key: "executiveBoard", label: "Executive Board" },
  { key: "designTeam", label: "Design Team" },
  { key: "reportingTeam", label: "Reporting Team" },
  { key: "editingTeam", label: "Editing Team" },
  { key: "communicationsTeam", label: "Communications Team" }
]

export default async function About() {
  const members = await getTeamMembers()
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto w-[min(92vw,1300px)]">
        <h2
          className={`${batmipItalic.className} text-[45px] leading-none tracking-[-0.02em] text-[#660c64]`}>
          About Us
        </h2>
        <div className="mt-3 mb-8 h-px w-full bg-[#d9ccd8]" />

        <p className={`${ebGaramondBasic.className} text-[#660c64] text-[34px] font-medium leading-snug mb-16 max-w-6.5xl`}>
          iJournal is the University of Washington Information School's{" "}
          <em className={ebGaramondItalic.className}>student-driven publication</em> dedicated to encouraging{" "}
          <em className={ebGaramondItalic.className}>critical dialogue, innovative ideas, and diverse perspectives.</em>
        </p>

        <div className="flex gap-16 items-start">
          <div className={`${ebGaramondBasic.className} flex-1 max-w-[710px] mt-22 space-y-4 text-black text-[22px] leading-snug`}>
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
          <div className="flex flex-col items-center gap-3 shrink-0 ml-8">
            <NextImage src="/executive_board.jpg" alt="2024-2025 iJournal Executive Board" width={460} height={520} className="rounded object-cover" />
            <p className={`${dmMonoBasic.className} text-[16px] text-black`}>
              2024-2025 iJournal Executive Board
            </p>
          </div>
        </div>
        <h2 className={`${batmipItalic.className} text-[45px] leading-none tracking-[-0.02em] text-[#660c64]`}>
          2024-2025 Staff
        </h2>
        <div className="mt-3 mb-8 h-px w-full bg-[#d9ccd8]" />

        {teams.map(({ key, label }) => {
          const teamMembers = members.filter(m => m.team === key);
          if (teamMembers.length === 0) return null;
          return (
            <div key={key} className="mb-12">
              <h3 className={`${batmipRegular.className} text-[34px] text-[#a45d92] mb-8`}>
                {label}
              </h3>
              <div className="grid grid-cols-2 gap-x-18 gap-y-14 md:grid-cols-3">
                {teamMembers.map((member) => (
                  <div key={member._id} className="max-w-[280px]">
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
                    <p className={`${dmMonoMedium.className} text-[20px] text-[#ac3990]`}>
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
