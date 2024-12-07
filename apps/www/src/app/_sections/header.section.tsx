import { cn } from "@/lib";
import { Component } from "@only-win/types/ui";
import Image from "next/image";

export const HeaderSection: Component = () => {
  return (
    <section className="relative h-[40rem]">
      <Image src="/background.png" alt="Background image" fill className="z-50 object-cover" />
      <span className="absolute w-full h-full left-0 top-0 bg-black/85 z-50" />


      <div className="relative z-50 flex flex-col items-center justify-center h-full">
        <h1 className="text-[#BFD6DC] text-8xl uppercase font-extrabold leading-[.85]">
          <span className="block">Under</span>
          <span className="block">Cover</span>
        </h1>
        <h2 className="text-center text-3xl font-thin">With friends... or not!</h2>

        <div className="flex items-center gap-4 mt-8">
          <button className={cn(
            "w-36 py-3 rounded-md",
            "hover:bg-blue-500 transition-colors duration-100"
          )}>How to play ?</button>
          <button className={cn(
            "w-36 py-3 rounded-md bg-[#2E261B] shadow-[0_4px_31px_0_#2E303D_inset]",
            "hover:bg-blue-500 transition-colors duration-100"
          )}>Start game</button>
        </div>
      </div>
    </section>
  );
}