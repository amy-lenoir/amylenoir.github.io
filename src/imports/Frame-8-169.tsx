import svgPaths from "./svg-cnhn7v08ev";
import imgImage1 from "figma:asset/0873c7d3941a1cba6f47be1a8f4e3e63f558979d.png";
import imgScreenshot20240812At15523Pm1 from "figma:asset/3f22aa39f9279277c4e96a655088108fe832cb71.png";

function Frame3() {
  return (
    <div className="absolute bg-[#ffe924] content-stretch flex gap-[8px] items-start left-[128px] px-[24px] py-[12px] rounded-[4px] top-[215px]">
      <div className="h-[20.086px] relative shrink-0 w-[28px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.0001 20.0863">
          <path d={svgPaths.p3456a900} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Varta:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black whitespace-nowrap">{`Business Model `}</p>
    </div>
  );
}

function NpGrowth() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="np_growth_7100533_000000 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="np_growth_7100533_000000 1">
          <path clipRule="evenodd" d={svgPaths.pf81400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#ff7124] content-stretch flex gap-[8px] items-start left-[358px] px-[24px] py-[12px] rounded-[4px] top-[215px]">
      <NpGrowth />
      <p className="font-['Varta:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[20px] text-black whitespace-nowrap">Digital Transformation</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-black content-stretch flex items-start px-[16px] relative rounded-[4px] shrink-0">
      <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[40px] text-white whitespace-nowrap">2</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[44px] top-[40px]">
      <Frame2 />
      <p className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[40px] text-black w-[1120px]">Case Study: Mayo Clinic Patient Platform</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full" data-name="Frame">
      <Frame3 />
      <div className="absolute h-[351.189px] left-[1236px] pointer-events-none top-[690px] w-[627px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage1} />
        <div aria-hidden="true" className="absolute border-[3.426px] border-black border-solid inset-0" />
      </div>
      <div className="absolute h-[348.619px] left-[1236px] pointer-events-none top-[321px] w-[627px]" data-name="Screenshot 2024-08-12 at 1.55.23 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgScreenshot20240812At15523Pm1} />
        <div aria-hidden="true" className="absolute border-[3.426px] border-black border-solid inset-0" />
      </div>
      <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[0] left-[130px] text-[0px] text-black top-[341px] whitespace-nowrap">
        <span className="font-['Lato:Heavy',sans-serif] leading-[1.32] not-italic text-[36px] tracking-[-0.72px] uppercase">Summary</span>
        <span className="leading-[32px] text-[24px]">{` `}</span>
      </p>
      <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold leading-[32px] left-[1236px] text-[24px] text-black top-[276px] whitespace-nowrap">{`Portfolio Map `}</p>
      <div className="absolute font-['Varta:Regular',sans-serif] font-normal leading-[0] left-[130px] text-[#262b32] text-[24px] top-[404px] w-[738px] whitespace-pre-wrap">
        <p className="leading-[32px] mb-0">A case study focused on establishing a clear vision, direction, and strategy for reimagining and redesigning the authenticated patient experience at Mayo Clinic.</p>
        <p className="leading-[32px] mb-0">&nbsp;</p>
        <p className="leading-[32px] mb-0">I used the concepts from Strategizer Portfolio Map to serve as a key tool to engage leadership in building consensus around the current state and creating a unified vision for the product’s future direction.</p>
        <p className="leading-[32px] mb-0">&nbsp;</p>
        <p className="leading-[32px] mb-0">This approach aimed to safeguard the Patient Platform’s market position and enhance its appeal to a global user base.</p>
        <p className="leading-[32px] mb-0">&nbsp;</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[36px]">
            <span className="leading-[32px]">{`Leveraged the Strategizer Explore & Exploit business model to evaluate value propositions.`}</span>
          </li>
          <li className="mb-0 ms-[36px]">
            <span className="leading-[32px]">Assessed Mayo Clinic’s current product portfolio.</span>
          </li>
          <li className="ms-[36px]">
            <span className="leading-[32px]">Determined strategic investment opportunities for future growth.</span>
          </li>
        </ul>
      </div>
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[1.2] left-[128px] not-italic text-[40px] text-black top-[128px] tracking-[-0.8px] w-[1368px]">{`How I defined and drove strategy and vision across teams: `}</p>
      <Frame4 />
      <Frame1 />
    </div>
  );
}