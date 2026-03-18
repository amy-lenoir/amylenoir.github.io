import imgContainer from "figma:asset/578ca7a9f02cfc0205572088307d8f10936dd0c3.png";

function Container2() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[683.656px]" data-name="Container">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[15px] left-0 text-[10px] text-[rgba(255,255,255,0.55)] top-0 tracking-[1.6px] uppercase whitespace-nowrap">Domain Expertise</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute font-['Lato:Black',sans-serif] h-[99.438px] leading-[49.72px] left-0 not-italic text-[56.5px] text-[rgba(255,255,255,0.95)] top-[29px] tracking-[0.4px] uppercase w-[683.656px] whitespace-nowrap" data-name="Container">
      <p className="absolute left-0 top-[-0.5px]">Healthcare</p>
      <p className="absolute left-0 top-[49.22px]">Experience</p>
    </div>
  );
}

function Span() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[28px] left-0 rounded-[20px] top-0 w-[80.555px]" data-name="span">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-white top-[4.5px] whitespace-nowrap">Cardiology</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[28px] left-[88.55px] rounded-[20px] top-0 w-[75.828px]" data-name="span">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-white top-[4.5px] whitespace-nowrap">Radiology</p>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[28px] left-[172.38px] rounded-[20px] top-0 w-[74.641px]" data-name="span">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-white top-[4.5px] whitespace-nowrap">Oncology</p>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[28px] left-[255.02px] rounded-[20px] top-0 w-[77.953px]" data-name="span">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-white top-[4.5px] whitespace-nowrap">Telehealth</p>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[28px] left-[340.98px] rounded-[20px] top-0 w-[91.555px]" data-name="span">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-white top-[4.5px] whitespace-nowrap">Clinical Trials</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[28px] left-[440.53px] rounded-[20px] top-0 w-[126.656px]" data-name="span">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-white top-[4.5px] whitespace-nowrap">Medicare/Medicaid</p>
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] h-[28px] left-[575.19px] rounded-[20px] top-0 w-[108.469px]" data-name="span">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-white top-[4.5px] whitespace-nowrap">AI in Healthcare</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[28px] left-0 top-[148.44px] w-[683.656px]" data-name="Container">
      <Span />
      <Span1 />
      <Span2 />
      <Span3 />
      <Span4 />
      <Span5 />
      <Span6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[176.438px] relative shrink-0 w-[683.656px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="opacity-35 shrink-0 size-0" data-name="Container" />;
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between px-[90.398px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#e0614a] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[7.13%] left-0 max-w-none top-0 w-[1.79%]" src={imgContainer} />
        </div>
      </div>
      <Container1 />
      <Container5 />
    </div>
  );
}