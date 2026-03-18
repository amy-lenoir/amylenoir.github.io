function Span() {
  return (
    <div className="absolute bg-[rgba(232,85,58,0.12)] content-stretch flex h-[30px] items-center left-0 px-[14px] py-[6px] rounded-[9999px] top-0 w-[80.273px]" data-name="span">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ff8b6a] text-[12px] tracking-[0.24px] whitespace-nowrap">Manager</p>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute bg-[rgba(27,168,160,0.12)] content-stretch flex h-[30px] items-center left-[88.27px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[41.5px]" data-name="span">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3dc4bd] text-[12px] tracking-[0.24px] whitespace-nowrap">IC</p>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute bg-[rgba(232,85,58,0.12)] content-stretch flex h-[30px] items-center left-[137.77px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[91.68px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ff8b6a] text-[12px] tracking-[0.24px] whitespace-nowrap">Healthcare</p>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute bg-[rgba(27,168,160,0.12)] content-stretch flex h-[30px] items-center left-[237.45px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[82.68px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#3dc4bd] text-[12px] tracking-[0.24px] whitespace-nowrap">B2B SaaS</p>
    </div>
  );
}

function Span4() {
  return (
    <div className="absolute bg-[rgba(232,180,0,0.12)] content-stretch flex h-[30px] items-center left-[328.13px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[60.875px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ffce3a] text-[12px] tracking-[0.24px] whitespace-nowrap">0-to-1</p>
    </div>
  );
}

function Span5() {
  return (
    <div className="absolute bg-[rgba(139,195,74,0.15)] content-stretch flex h-[30px] items-center left-[397.01px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[71.672px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c0ed5e] text-[12px] tracking-[0.24px] whitespace-nowrap">Growth</p>
    </div>
  );
}

function Span6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] content-stretch flex h-[30px] items-center left-[476.68px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[121.188px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a0a0b0] text-[12px] tracking-[0.24px] whitespace-nowrap">Design Systems</p>
    </div>
  );
}

function Span7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] content-stretch flex h-[30px] items-center left-[605.87px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[114.125px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a0a0b0] text-[12px] tracking-[0.24px] whitespace-nowrap">Service Design</p>
    </div>
  );
}

function Span8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.06)] content-stretch flex h-[30px] items-center left-[727.99px] px-[14px] py-[6px] rounded-[9999px] top-0 w-[40.195px]" data-name="span">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#a0a0b0] text-[12px] tracking-[0.24px] whitespace-nowrap">AI</p>
    </div>
  );
}

export default function Tags() {
  return (
    <div className="relative size-full" data-name="Tags">
      <Span />
      <Span1 />
      <Span2 />
      <Span3 />
      <Span4 />
      <Span5 />
      <Span6 />
      <Span7 />
      <Span8 />
    </div>
  );
}