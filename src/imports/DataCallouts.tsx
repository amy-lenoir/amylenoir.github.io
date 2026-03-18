function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[40px] left-[89.52px] text-[#e8553a] text-[40px] text-center top-[2px] tracking-[-1.2px] whitespace-nowrap">34%</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['General_Sans:Regular',sans-serif] leading-[18.2px] left-[89.21px] not-italic text-[#a0a0b0] text-[13px] text-center top-px w-[106px]">Task completion rate improvement</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#26262f] col-1 h-[148.391px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[32px] px-[24px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[40px] left-[88.84px] text-[#1ba8a0] text-[40px] text-center top-[2px] tracking-[-1.2px] whitespace-nowrap">3×</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['General_Sans:Regular',sans-serif] leading-[18.2px] left-[88.85px] not-italic text-[#a0a0b0] text-[13px] text-center top-px w-[122px]">Faster design-to-dev handoff</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#26262f] col-2 h-[148.391px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[32px] px-[24px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[40px] left-[88.38px] text-[#e8b400] text-[40px] text-center top-[2px] tracking-[-1.2px] whitespace-nowrap">4→22</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['General_Sans:Regular',sans-serif] leading-[18.2px] left-[88.77px] not-italic text-[#a0a0b0] text-[13px] text-center top-px w-[74px]">Design team scaled</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#26262f] col-3 h-[148.391px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[32px] px-[24px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[40px] left-[88.34px] text-[#8bc34a] text-[40px] text-center top-[2px] tracking-[-1.2px] whitespace-nowrap">$2.1M</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[36.391px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['General_Sans:Regular',sans-serif] leading-[18.2px] left-[89.12px] not-italic text-[#a0a0b0] text-[13px] text-center top-px w-[91px]">Annual revenue impact</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#26262f] col-4 h-[148.391px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start pt-[32px] px-[24px] relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

export default function DataCallouts() {
  return (
    <div className="bg-[rgba(255,255,255,0.06)] gap-x-px gap-y-px grid grid-cols-[_____minmax(0,225.50fr)_minmax(0,225.50fr)_minmax(0,225.50fr)_minmax(0,225.50fr)_minmax(0,1fr)] grid-rows-[repeat(1,minmax(0,1fr))] overflow-clip relative rounded-[12px] size-full" data-name="Data_callouts">
      <Container />
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}