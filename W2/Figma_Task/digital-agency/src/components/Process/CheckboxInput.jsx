import React from "react";

function CheckboxInput({ label, checked, onChange }) {
  return (
    <div className="flex flex-1 shrink gap-2.5 items-center basis-0 min-w-60">
      <div
        className="flex gap-2.5 items-center self-stretch p-1 my-auto w-7 h-7 rounded border border-solid bg-neutral-800 border-[color:var(--Grey-20,#333)]"
        onClick={onChange}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
      >
        {checked && (
          <img
            src="https://shivshankar1201.sirv.com/digital-agency/Process/CheckboxInput/Checkbox%20checked.svg"
            className="object-contain self-stretch my-auto w-5 rounded aspect-square"
            alt="Checkbox checked"
          />
        )}
      </div>
      <div className="flex-1 shrink self-stretch my-auto text-base text-white basis-0">
        {label}
      </div>
    </div>
  );
}

export default CheckboxInput;