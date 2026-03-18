import imgImageWithFallback from "figma:asset/c3527b35b2bd814e79bd8d242d8d9bb84d9e36c2.png";

function ImageWithFallback() {
  return (
    <div className="absolute h-[220px] left-0 top-0 w-[507.5px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-t from-[#26262f] h-[220px] left-0 to-1/2 to-[rgba(0,0,0,0)] top-0 w-[507.5px]" data-name="Container" />;
}

function Span() {
  return (
    <div className="absolute h-[48px] left-[436.05px] top-[16px] w-[55.445px]" data-name="span">
      <p className="absolute font-['Satoshi:Black',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-[rgba(255,255,255,0.08)] top-[3px] whitespace-nowrap">01</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[220px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ImageWithFallback />
      <Container1 />
      <Span />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[18px] left-[24px] top-[24px] w-[459.5px]" data-name="Container">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#6b6b7b] text-[12px] top-[0.5px] whitespace-nowrap">Presbyterian Healthcare Services</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(232,85,58,0.12)] content-stretch flex h-[30px] items-center left-0 px-[14px] py-[6px] rounded-[9999px] top-0 w-[80.273px]" data-name="span">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ff8b6a] text-[12px] tracking-[0.24px] whitespace-nowrap">Manager</p>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[rgba(232,85,58,0.12)] content-stretch flex h-[30px] items-center left-[88.27px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[91.68px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ff8b6a] text-[12px] tracking-[0.24px] whitespace-nowrap">Healthcare</p>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[rgba(232,180,0,0.12)] content-stretch flex h-[30px] items-center left-[187.95px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[114.125px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ffce3a] text-[12px] tracking-[0.24px] whitespace-nowrap">Service Design</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[30px] left-[24px] top-[50px] w-[459.5px]" data-name="Container">
      <Span1 />
      <Span2 />
      <Span3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[26px] left-[24px] top-[92px] w-[459.5px]" data-name="Container">
      <p className="absolute font-['Satoshi:Bold',sans-serif] leading-[26px] left-0 not-italic text-[20px] text-white top-[0.5px] tracking-[-0.2px] whitespace-nowrap">{`Presbyterian Cardiology Referrals & CAHPS`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[48px] left-[24px] overflow-clip top-[130px] w-[459.5px]" data-name="Container">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#a0a0b0] text-[15px] top-[0.5px] w-[457px]">Led human-centered design research and service design to improve cardiology referral experience, increase Medicare CAHPS scores, and reduce patient wait times across 40+ facilities.</p>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute h-[36px] left-[12px] top-[8px] w-[103.32px]" data-name="span">
      <p className="absolute font-['Satoshi:Black',sans-serif] leading-[36px] left-0 not-italic text-[#e8553a] text-[24px] top-px tracking-[-0.48px] whitespace-nowrap">74→83%</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute h-[31.188px] left-[127.32px] top-[10.41px] w-[108.734px]" data-name="span">
      <p className="absolute font-['General_Sans:Regular',sans-serif] leading-[15.6px] left-0 not-italic text-[#a0a0b0] text-[12px] top-px w-[109px]">CAHPS score improvement target</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(232,85,58,0.08)] border-[#e8553a] border-l-3 border-solid h-[52px] left-[24px] rounded-[4px] top-[198px] w-[251.055px]" data-name="Container">
      <Span4 />
      <Span5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[274px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

export default function Link() {
  return (
    <div className="bg-[#26262f] relative rounded-[12px] size-full" data-name="Link">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Container />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.04)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.3)]" />
    </div>
  );
}