import { useState } from "react";
import { Directions } from "../App";
import Digit from "./Digit";

type SidePanelProps = {
  lastFiveAssets: Array<string>;
};

export default function SidePanel(props: SidePanelProps) {
  const { lastFiveAssets } = props;
  const [listDirection, setListDirection] = useState<Directions>("original");

  return (
    <div className="w-[35%] bg-[#0b1a48] text-white h-screen">
      <h1 className="text-2xl p-1">Details</h1>
      <div className="flex items-center p-2">
        <div className="size-[15px] bg-[#cbfe34] mr-2" />
        <p>ROB-1</p>
      </div>
      <div className="flex justify-between items-center p-2 border-t-1 border-[#454d5a]">
        <p>Last 5 assets scanned</p>
        <button
          className="text-sm text-[#cbfe34] cursor-pointer p-1 rounded-sm border border-[#cbfe34]"
          onClick={() =>
            setListDirection(
              listDirection === "original" ? "reversed" : "original",
            )
          }
        >
          {`${listDirection === "original" ? "Newest First" : "Oldest First"}`}
        </button>
      </div>
      <ul
        className={`p-2 flex ${listDirection === "original" ? "flex-col" : "flex-col-reverse"}`}
      >
        {lastFiveAssets?.map((assetId) => {
          if (assetId?.length === 0 || assetId === null) return;

          const assetArr = assetId?.toString().split("");

          return (
            <li key={assetId} className="flex p-1 mb-3">
              {assetArr?.map((digit, index) => (
                <Digit key={`${assetId}-${index}`} digit={digit} />
              ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
