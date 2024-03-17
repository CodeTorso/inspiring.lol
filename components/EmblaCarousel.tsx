import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  rapidfire: { q: string; a: string }[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, rapidfire } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    // containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="min-w-[100%] max-w-[100%]">
      <div className="px-3 overflow-hidden" ref={emblaMainRef}>
        <div className="flex touch-pan-y ml-[calc(1rem_*_-1)]">
          {slides.map((index) => (
            <div className="flex-[0_0_100%] min-w-0 px-4" key={index}>
              <div className="text-[4rem] font-semibold flex flex-col items-center justify-center gap-1 h-[13rem] rounded-[1.8rem]">
                <h2 className="text-center text-gray-300 text-xl font-bold">
                  {rapidfire[index].q}
                </h2>
                <h2 className="text-center text-gray-100 text-4xl">
                  {rapidfire[index].a}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[0.8rem]">
        <div className="px-4 overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex ml-[calc(0.8rem_*_-1)]">
            {slides.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
