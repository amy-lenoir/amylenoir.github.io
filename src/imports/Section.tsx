function Container() {
  return (
    <div className="absolute h-[43.289px] left-[32px] top-[72px] w-[905px]" data-name="Container">
      <p className="absolute font-['Satoshi:Black',sans-serif] leading-[43.296px] left-0 not-italic text-[39.36px] text-white top-[1.5px] tracking-[-0.984px] whitespace-nowrap">Teal \u2014 Secondary Accent</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[57.594px] left-[32px] opacity-85 top-[131.29px] w-[576px]" data-name="Container">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[28.8px] left-0 not-italic text-[18px] text-white top-px w-[534px]">{`Healthcare credibility, trust signals, secondary actions. The book's \u201cInvent\u201d intelligence \u2014 depth, expertise.`}</p>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#1ba8a0] relative size-full" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}