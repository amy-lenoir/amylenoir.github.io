import svgPaths from "./svg-saakjmxrat";

export default function TagDark() {
  return (
    <div className="bg-[rgba(232,180,0,0.15)] content-stretch flex gap-[4px] items-center px-[14px] py-[6px] relative rounded-[9999px] size-full" data-name="Tag_dark">
      <div className="relative shrink-0 size-[18px]" data-name="Icon / briefcase">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[5.21%_5.21%_13.54%_5.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.125 14.625">
              <g id="Vector">
                <path d={svgPaths.p1fcb7700} fill="var(--fill-0, #FFE07A)" />
                <path d={svgPaths.p16dad200} fill="var(--fill-0, #FFE07A)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#ffce3a] text-[12px] tracking-[0.24px] whitespace-nowrap">Tag</p>
    </div>
  );
}