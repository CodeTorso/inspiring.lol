"use client";

import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

function Rapidfire({ rapidFire }: { rapidFire: { q: string; a: string }[] }) {
  const OPTIONS: EmblaOptionsType = {};
  const SLIDES = Array.from(rapidFire.keys());
  return (
    <div className="flex justify-center items-center rounded-3xl h-80 w-full mb-10 bg-[#1c27c229]">
      <div className="w-[90%] h-[90%] flex items-center">
        <EmblaCarousel
          rapidfire={rapidFire}
          slides={SLIDES}
          options={OPTIONS}
        />
      </div>
    </div>
  );
}

export default Rapidfire;
