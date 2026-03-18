function Container1() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[38px] left-0 text-[38px] text-white top-[-0.5px] whitespace-nowrap">25+</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.88)] top-0 tracking-[1px] uppercase whitespace-nowrap">Years Experience</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#0b0b0b] col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[6px] items-start pt-[32px] px-[28px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[38px] left-0 text-[38px] text-white top-[-0.5px] whitespace-nowrap">15</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.88)] top-0 tracking-[1px] uppercase whitespace-nowrap">Teams Led</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#1a1a1a] col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[6px] items-start pt-[32px] px-[28px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[38px] left-0 text-[38px] text-white top-[-0.5px] whitespace-nowrap">6</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.88)] top-0 tracking-[1px] uppercase whitespace-nowrap">Health Systems</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#2a2a2a] col-3 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[6px] items-start pt-[32px] px-[28px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[38px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[38px] left-0 text-[38px] text-white top-[-0.5px] whitespace-nowrap">13</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.88)] top-0 tracking-[1px] uppercase whitespace-nowrap">Healthcare Domains</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#e0614a] col-4 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[6px] items-start pt-[32px] px-[28px] relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

export default function Div() {
  return (
    <div className="gap-x-[2px] gap-y-[2px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] relative size-full" data-name="div">
      <Container />
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}