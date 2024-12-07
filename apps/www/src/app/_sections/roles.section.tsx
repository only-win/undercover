import type { Component } from "@only-win/types/ui";
import { cn } from "@/lib/utils";
import { roles } from "@/lib/config/roles";
import { underdog } from "@/lib/utils/fonts";
import Image from "next/image";

export const RolesSection: Component = () => {
  return (
    <section className="relative z-40 bg-[#111115] py-24 shadow-[0px_4px_11px_0px_rgba(0,0,0,0.25)_inset]">
      <span className="block absolute -left-64 -top-64 size-96 shrink-0 bg-[#FFDDA8] blur-[400px]" />
      <div className="container">
        <div>
          <h2 className="text-center text-5xl">Rôles</h2>
          <p className="text-center text-2xl font-thin mt-4">Découvrez les différents rôles disponibles dans le jeu</p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-20 mt-28">
          {roles.map((role) => (
            <div key={role.name} className="relative bg-[#0B0B0F] p-5 rounded-md mx-auto">
              <span className={cn("text-3xl absolute -top-8 left-0 right-0 bg-[#0B0B0F] w-fit py-4 px-8 mx-auto", underdog.className)}>{role.name}</span>
              <Image src={role.image} alt={`${role.name} image`} height={500} width={500} className="h-96 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}