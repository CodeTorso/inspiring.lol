import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props;

  return (
    <div className="flex-[0_0_22%] min-w-0 pl-[0.8rem]  md:flex-[0_0_20%] lg:flex-[0_0_13%]">
      <button
        onClick={onClick}
        type="button"
        className={`bg-transparent touch-manipulation inline-flex no-underline cursor-pointer shadow-[inset_0_0_0_0.2rem_rgb(30,31,56)] text-xl font-bold ${
          selected ? "text-[rgb(222,222,222)]" : "text-[rgb(101,101,101)]"
        }  items-center justify-center h-[4.5rem] md:h-[4.5rem] lg:h-[4rem] lg:rounded-2xl w-full m-0 p-0 rounded-3xl border-0`}
      >
        {index + 1}
      </button>
    </div>
  );
};
