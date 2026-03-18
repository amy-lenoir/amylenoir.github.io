import imgContainer from "figma:asset/578ca7a9f02cfc0205572088307d8f10936dd0c3.png";
import imgImg from "figma:asset/cd26205b522a89615e913af5c319e0666e80e2e3.png";
import imgContainer1 from "figma:asset/dc08c65ec1c19e874876e3ad459032a61cda7ccd.png";

function Container1() {
  return <div className="opacity-35 shrink-0 size-0" data-name="Container" />;
}

function Span() {
  return <div className="absolute bg-[#7a7a7a] h-px left-0 top-[7px] w-[20px]" data-name="span" />;
}

function Container3() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[460.297px]" data-name="Container">
      <Span />
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[15px] left-[30px] text-[#7a7a7a] text-[10px] top-0 tracking-[1.6px] uppercase whitespace-nowrap">About</p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[40.68px] left-0 top-[39px] w-[460.297px]" data-name="h2">
      <p className="absolute font-['Playfair_Display:Black',sans-serif] font-black leading-[40.68px] left-0 text-[#0b0b0b] text-[45.2px] top-0 tracking-[0.4px] whitespace-nowrap">{`Hi, I'm Amy.`}</p>
    </div>
  );
}

function P() {
  return (
    <div className="h-[88.781px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Lato:Light',sans-serif] leading-[0] left-0 not-italic text-[#9b9b9b] text-[0px] text-[16px] top-0 w-[458px]">
        <span className="leading-[29.6px]">{`Through my work, I bridge the gap between `}</span>
        <span className="font-['Lato:Bold',sans-serif] leading-[29.6px] text-white">problem definition</span>
        <span className="leading-[29.6px]">{` and `}</span>
        <span className="font-['Lato:Bold',sans-serif] leading-[29.6px] text-white">solution development</span>
        <span className="leading-[29.6px]">{` — helping organizations determine which solutions to implement and the optimal path for getting there.`}</span>
      </p>
    </div>
  );
}

function P1() {
  return (
    <div className="h-[147.969px] relative shrink-0 w-full" data-name="p">
      <p className="absolute font-['Lato:Light',sans-serif] leading-[0] left-0 not-italic text-[#9b9b9b] text-[0px] text-[16px] top-0 w-[459px]">
        <span className="leading-[29.6px]">{`Passionate about `}</span>
        <span className="font-['Lato:Bold',sans-serif] leading-[29.6px] text-white">research-driven innovation</span>
        <span className="leading-[29.6px]">{` and committed to continuous learning across industry trends and emerging technologies. Proven track record influencing organizations through `}</span>
        <span className="font-['Lato:Bold',sans-serif] leading-[29.6px] text-white">product design</span>
        <span className="leading-[29.6px]">{` and design thinking, `}</span>
        <span className="font-['Lato:Bold',sans-serif] leading-[29.6px] text-white">building teams</span>
        <span className="leading-[29.6px]">, and shipping innovative digital products from inception to launch.</span>
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[252.75px] items-start left-0 top-[111.68px] w-[460.297px]" data-name="Container">
      <P />
      <P1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[364.43px] left-0 top-0 w-[460.297px]" data-name="Container">
      <Container3 />
      <H />
      <Container4 />
    </div>
  );
}

function Img() {
  return (
    <div className="absolute h-[405px] left-[0.16px] top-[-24.5px] w-[404px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg} />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[405px] left-[0.16px] opacity-35 rounded-[190px] top-[-24.5px] w-[404px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[190px]">
        <img alt="" className="absolute left-0 max-w-none size-[5.26%] top-0" src={imgContainer1} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute left-[40.15px] overflow-clip rounded-[190px] size-[380px] top-0" data-name="Container">
      <Img />
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[380px] left-[524.3px] top-0 w-[460.305px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[380px] relative shrink-0 w-[984.602px]" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container5 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-center justify-between px-[90.398px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#0b0b0b] inset-0" />
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[7.13%] left-0 max-w-none top-0 w-[1.79%]" src={imgContainer} />
        </div>
      </div>
      <Container1 />
      <Div />
    </div>
  );
}