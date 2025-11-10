import svgPaths from "./svg-g63he7ym5m";
import imgPlaceholderImage from "figma:asset/9bfb5a1b7441d0c42969e97edecbfb4cad951811.png";
import imgPlaceholderImage1 from "figma:asset/dcb93039f1ada763774bed0bd798cea4a0d7036a.png";
import imgPlaceholderImage2 from "figma:asset/9624ca9d390edf267974082a74d1feff8205777a.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-white w-full" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] relative shrink-0 text-[56px] tracking-[-0.56px] w-full">Más de 10 años de experiencia en soluciones</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] w-full">En LabSolutions Company, hemos dedicado más de una década a ofrecer soluciones innovadoras en el ámbito de la tecnología. Nuestro enfoque se centra en la satisfacción del cliente y la mejora continua de nuestros servicios.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a0102] text-[16px] text-nowrap whitespace-pre">Descubre</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button />
      <Button1 />
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Column">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center pl-[64px] pr-[80px] py-0 relative size-full">
          <Content />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Column />
      <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#ce0e2d] content-stretch flex flex-col gap-[80px] h-[900px] items-center overflow-clip relative shrink-0 w-[1440px]" data-name="Header / 36 /">
      <Container />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#ce0e2d] text-[24px] tracking-[-0.24px] w-full">Nuestra misión</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] text-black w-full">Brindar soluciones efectivas y sostenibles que impulsen el crecimiento y la eficiencia empresarial.</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Content">
      <Content1 />
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[64px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-[932px]" data-name="Content">
      <Column1 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#ce0e2d] text-[24px] tracking-[-0.24px] w-full">Nuestra visión</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] text-black w-full">Ser reconocidos como líderes en soluciones empresariales innovadoras que contribuyen a un futuro más sostenible.</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Content">
      <Content4 />
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[932px]" data-name="Column">
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-center w-full" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.4] relative shrink-0 text-[#ce0e2d] text-[24px] tracking-[-0.24px] w-full">Nuestros valores</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[16px] text-black w-full">Creemos en la innovación, siempre en busca de nuevas soluciones. Nos guía el compromiso, esforzándonos por superar las expectativas. Apostamos por la sostenibilidad, porque creemos en el crecimiento responsable.</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[932px]" data-name="Content">
      <Content6 />
    </div>
  );
}

function Layout() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[80px] items-center overflow-clip px-[64px] py-[112px] relative shrink-0 w-[1440px]" data-name="Layout / 254 /">
      <Content3 />
      <Column2 />
      <Content7 />
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">Características</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center not-italic relative shrink-0 text-center w-full" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] relative shrink-0 text-[#ce0e2d] text-[48px] tracking-[-0.48px] w-full">Descubre nuestras características únicas de servicio</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black w-full">En LabSolutions, nos especializamos en ofrecer soluciones innovadoras y personalizadas. Nuestro enfoque centrado en el cliente garantiza resultados excepcionales.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[768px]" data-name="Section Title">
      <TaglineWrapper />
      <Content8 />
    </div>
  );
}

function TrendingUpOutline() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="TrendingUpOutline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="TrendingUpOutline">
          <path d={svgPaths.p2e97df00} id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] items-center not-italic relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.24px] w-full">Innovación constante</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Implementamos tecnologías avanzadas para mejorar la eficiencia y efectividad de nuestros servicios.</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Content">
      <TrendingUpOutline />
      <Content9 />
    </div>
  );
}

function UserGroupOutline() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="UserGroupOutline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="UserGroupOutline">
          <path d={svgPaths.p2c00d540} id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] items-center not-italic relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.24px] w-full">Atención personalizada</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Nuestro equipo se dedica a entender y satisfacer las necesidades específicas de cada cliente.</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Content">
      <UserGroupOutline />
      <Content11 />
    </div>
  );
}

function Column3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[64px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content10 />
      <Content12 />
    </div>
  );
}

function ThumbUpOutline() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="ThumbUpOutline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="ThumbUpOutline">
          <path d={svgPaths.p12955e80} id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] items-center not-italic relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.24px] w-full">Resultados medibles</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Ofrecemos informes detallados que demuestran el impacto positivo de nuestras soluciones en su negocio.</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Content">
      <ThumbUpOutline />
      <Content13 />
    </div>
  );
}

function PhoneOutgoingOutline() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="PhoneOutgoingOutline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="PhoneOutgoingOutline">
          <path d={svgPaths.p3cf86880} id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[16px] items-center not-italic relative shrink-0 text-black text-center w-full" data-name="Content">
      <p className="leading-[1.4] relative shrink-0 text-[24px] tracking-[-0.24px] w-full">Contáctanos hoy</p>
      <p className="leading-[1.5] relative shrink-0 text-[16px] w-full">Estamos aquí para ayudarte a alcanzar tus objetivos con nuestras soluciones efectivas.</p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Content">
      <PhoneOutgoingOutline />
      <Content15 />
    </div>
  );
}

function Column4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[64px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content14 />
      <Content16 />
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Content">
      <Column3 />
      <div className="relative rounded-[8px] shrink-0 size-[540px]" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage1} />
      </div>
      <Column4 />
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon / chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon / chevron-right">
          <path d={svgPaths.p15d49700} fill="var(--fill-0, black)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative rounded-[100px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">Contactar a un experto</p>
      <IconChevronRight />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button2 />
    </div>
  );
}

function Layout1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[80px] items-center overflow-clip px-[64px] py-[112px] relative shrink-0 w-[1440px]" data-name="Layout / 254 /">
      <SectionTitle />
      <Content17 />
      <Actions1 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 w-full" data-name="Content">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.2] relative shrink-0 text-[#ce0e2d] text-[48px] tracking-[-0.48px] w-full">Contáctanos para más información</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[#0a0102] text-[18px] w-full">Estamos aquí para resolver tus dudas y ofrecerte soluciones personalizadas que se ajusten a tus necesidades.</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ce0e2d] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Solicitar</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(10,1,2,0.15)] border-solid inset-[-1px] pointer-events-none rounded-[101px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0a0102] text-[16px] text-nowrap whitespace-pre">Más</p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Column5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Column">
      <Content18 />
      <Actions2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full" data-name="Container">
      <Column5 />
      <div className="basis-0 grow h-[400px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgPlaceholderImage2} />
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[80px] items-start overflow-clip px-[64px] py-[112px] relative shrink-0 w-[1440px]" data-name="CTA / 1 /">
      <Container1 />
    </div>
  );
}

export default function Historia() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Historia">
      <Header />
      <Layout />
      <Layout1 />
      <Cta />
    </div>
  );
}