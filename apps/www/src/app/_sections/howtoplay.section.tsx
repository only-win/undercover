import { cn } from "@/lib";
import { informations } from "@/lib/config/howtoplay";
import { underdog } from "@/lib/fonts";
import { Component } from "@only-win/types/ui";

export const HowToPlaySection: Component = () => {
  return (
    <section className="relative bg-[#0F0F12] py-24 z-30  overflow-hidden">
      <span className="block absolute -right-64 -top-64 size-52 shrink-0 bg-[#FFDDA8] blur-[380px]" />
      <div className="container">
        <div>
          <h2 className="text-center text-5xl">Comment jouer ?</h2>
          <p className="text-center text-2xl font-thin mt-4">{'"'}Eh les mecs, il faut faire quoi en vrai ?{'"'}</p>
        </div>
        <div className="space-y-8 mt-28">
          {informations.map((info) => (
            <div key={info.place} className={cn("flex items-center gap-2", underdog.className)}>
              <div className="relative flex-1 p-6 bg-[#0B0B0F] border-4 border-[#05050E]">
                <div className="absolute -left-12 top-0 bottom-0 my-auto bg-[#05050E] border-2 border-[#0B0B0F] size-16 flex items-center justify-center text-4xl">
                  {info.place}
                </div>
                <div className="space-y-4 ml-4">
                  {info.description.map((desc, i) => (
                    <p key={i} className="text-justify">{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="block absolute -left-64 -bottom-64 size-52 shrink-0 bg-[#FFDDA8] blur-[380px]" />
    </section>
  );
}