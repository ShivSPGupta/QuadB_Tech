import React from "react";

function InputField({ label, placeholder }) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center px-8 py-5 rounded-md border border-solid basis-0 bg-neutral-800 bg-opacity-50 border-[#262626] min-w-60 max-md:px-5">
      <label className="text-lg font-medium text-white">
        {label}
      </label>
      <div className="flex flex-col justify-center mt-4 w-full text-base text-stone-500">
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent border-none outline-none text-stone-500"
        />
        <div className="mt-1.5 w-full border border-solid bg-zinc-800 border-zinc-800 min-h-px" />
      </div>
    </div>
  );
}

export default InputField;