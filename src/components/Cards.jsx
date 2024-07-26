import React from "react";
import { ClipboardCopy } from "lucide-react";
import { Check } from "lucide-react";
import { useState } from "react";

const Cards = ({ card }) => {
    const [copy, setCopy] = useState( <ClipboardCopy size={18} />);
    

    const copyToClipboard = async () => {
      await navigator.clipboard.writeText(card.command);
      setCopy( <Check size={18} color="#25d030" />);
      setTimeout(() => {
        setCopy(<ClipboardCopy size={18} />);
      }, 2000);
    };
  return (
    <div
      className=" flex flex-col justify-between rounded-lg bg-card h-64 text-card-foreground shadow-md bg-[#010536]"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className=" text-2xl font-semibold leading-none tracking-tight">
          {card.title}
        </h3>
        <p className="text-sm text-muted-foreground">{card.description}</p>
      </div>

      <div className="p-4">
        <pre className=" flex flex-row gap-4 bottom-2 w-full bg-muted py-4 bg-[#121e3a] px-2  rounded-md ">
         <div className=" flex-grow overflow-hidden hover:overflow-x-auto">
         {card.command}
         </div>
          <div className="">
            <button onClick={() => copyToClipboard()}>
                {copy}
            </button>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default Cards;
