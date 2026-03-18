import imgImageProfileWhat1 from "figma:asset/3e3a9f51dc98a1da176300fe60e995b528a0f775.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start mr-[-329px] pl-[183px] pr-[40px] py-[100px] relative shrink-0 text-black w-[1432px]">
      <p className="font-['Playfair_Display:Black',sans-serif] font-black leading-[0.855] relative shrink-0 text-[64px] tracking-[0.64px] whitespace-nowrap">Hi, I’m Amy.</p>
      <div className="font-['Lato:Light',sans-serif] h-[399px] leading-[0] not-italic relative shrink-0 text-[0px] text-[18px] w-[709px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[34px]">{`Through my work, I bridge the gap between `}</span>
          <span className="font-['Lato:Bold',sans-serif] leading-[34px] not-italic">problem definition</span>
          <span className="leading-[34px]">{` and `}</span>
          <span className="font-['Lato:Bold',sans-serif] leading-[34px] not-italic">solution development</span>
          <span className="leading-[34px]">{` – helping organizations determine which solutions to implement and the optimal path for getting there. I am passionate about `}</span>
          <span className="font-['Lato:Bold',sans-serif] leading-[34px] not-italic">research-driven</span>
          <span className="leading-[34px]">{` innovation and committed to the continuous learning of industry trends and emerging technologies – I believe we must understand it in order to leverage, manage, and teach it. `}</span>
        </p>
        <p className="leading-[34px] mb-0">&nbsp;</p>
        <p className="mb-0">
          <span className="leading-[34px]">{`Proven track record of influencing organizations through `}</span>
          <span className="font-['Lato:Medium',sans-serif] leading-[34px] not-italic">product design</span>
          <span className="leading-[34px]">{` and `}</span>
          <span className="font-['Lato:Medium',sans-serif] leading-[34px] not-italic">design thinking</span>
          <span className="leading-[34px]">{`, `}</span>
          <span className="font-['Lato:Medium',sans-serif] leading-[34px] not-italic">building teams</span>
          <span className="leading-[34px]">{`, as well as the ability to do hands-on work while leading the team to ship innovative digital products from inception to launch. `}</span>
        </p>
        <p className="leading-[34px] mb-0">&nbsp;</p>
        <p>
          <span className="leading-[34px]">{`In my spare time I `}</span>
          <span className="font-['Lato:Medium',sans-serif] leading-[34px] not-italic">coach youth sports</span>
          <span className="leading-[34px]">{` and `}</span>
          <span className="font-['Lato:Medium',sans-serif] leading-[34px] not-italic">mentor designers</span>
          <span className="leading-[34px]">.</span>
        </p>
      </div>
    </div>
  );
}

export default function ShowcaseAboutMe() {
  return (
    <div className="bg-white content-start flex flex-wrap gap-y-0 items-start pr-[329px] relative size-full" data-name="Showcase_about me">
      <div className="absolute h-[410px] right-0 top-[311px] w-[1061px]" data-name="image_profile_what 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[404.15%] left-0 max-w-none top-[-178.36%] w-full" src={imgImageProfileWhat1} />
        </div>
      </div>
      <Frame />
    </div>
  );
}