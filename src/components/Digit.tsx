type DigitProps = {
  digit: string;
};

const DigitDictionary: { [key: string]: Array<string> } = {
  "0": ["a", "b", "c", "e", "f", "g"],
  "1": ["c", "f"],
  "2": ["a", "c", "d", "e", "g"],
  "3": ["a", "c", "d", "f", "g"],
  "4": ["b", "c", "d", "f"],
  "5": ["a", "b", "d", "f", "g"],
  "6": ["a", "b", "d", "e", "f", "g"],
  "7": ["a", "c", "f"],
  "8": ["a", "b", "c", "d", "e", "f", "g"],
  "9": ["a", "b", "c", "d", "f"],
};

export default function Digit(props: DigitProps) {
  const { digit } = props;

  const digitSegmentList = DigitDictionary[digit] ?? [];

  return (
    <div className="grid grid-cols-3 gap-[2px] w-fit">
      <div
        className={`w-[8px] h-[2px] col-span-1 col-start-2 ${digitSegmentList?.includes("a") ? "bg-white" : ""}`}
      />
      <div
        className={`w-[2px] h-[8px] col-span-1 col-start-1 ml-[7px] ${digitSegmentList?.includes("b") ? "bg-white" : ""}`}
      />
      <div
        className={`w-[2px] h-[8px] col-span-1 col-start-3 ${digitSegmentList?.includes("c") ? "bg-white" : ""}`}
      />
      <div
        className={`w-[8px] h-[2px] col-span-1 col-start-2 ${digitSegmentList?.includes("d") ? "bg-white" : ""}`}
      />
      <div
        className={`w-[2px] h-[8px] col-span-1 col-start-1 ml-[7px] ${digitSegmentList?.includes("e") ? "bg-white" : ""}`}
      />
      <div
        className={`w-[2px] h-[8px] col-span-1 col-start-3 ${digitSegmentList?.includes("f") ? "bg-white" : ""}`}
      />
      <div
        className={`w-[8px] h-[2px] col-span-1 col-start-2 ${digitSegmentList?.includes("g") ? "bg-white" : ""}`}
      />
    </div>
  );
}
