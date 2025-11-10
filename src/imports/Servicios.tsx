import imgPlaceholderImage from "figma:asset/bcb58ba3fe21d19231aab585b259e82ed632073c.png";
import imgPlaceholderImage1 from "figma:asset/baa88283e462280f9b442724609a594c093b71a9.png";
import imgPlaceholderImage2 from "figma:asset/15abfcf01d43b74e34a2824ec5517e833534a313.png";
import imgPlaceholderImage3 from "figma:asset/c8225de6e9075ba00014ebf4cf2363bef8e82d35.png";
import imgPlaceholderImage4 from "figma:asset/c7624450dd6660de50d1cd58e66db943973fbd33.png";
import imgPlaceholderImage5 from "figma:asset/c13560064f1bf53e0afe7355825a340020df2bc0.png";
import imgPlaceholderImage6 from "figma:asset/25538dcdb9941d3e063237fdc8f00a585e662d76.png";
import imgPlaceholderImage7 from "figma:asset/f032f2b3a9e78ff29e8d0ec80c36c822f8126aa0.png";
import imgPlaceholderImage8 from "figma:asset/8a9bb507a1550622ad3670e432cd817e486ad08a.png";
import imgPlaceholderImage9 from "figma:asset/3feb5a77c843097a5287fc01eb6be740af641f15.png";
import imgPlaceholderImage10 from "figma:asset/ad5e539e57689cc38ac82d2ad82c0e965cb112d8.png";
import imgPlaceholderImage11 from "figma:asset/b31aa4b49eeee45bfca727ad44934242bb0d38ca.png";
import imgPlaceholderImage12 from "figma:asset/cb7afd0b0dd6d1266f923196a0aba1ab1dec633f.png";
import imgPlaceholderImage13 from "figma:asset/7727ee2b2b95d9680094f77ab54270e98315654c.png";
import imgPlaceholderImage14 from "figma:asset/a688d74a52489b83641ded600a9fe81893e57d6a.png";
import imgPlaceholderImage15 from "figma:asset/039527c5637a1f6b4c86b1ebb6beafcbca6a7253.png";
import imgPlaceholderImage16 from "figma:asset/53b0653b12e92e921287eaa7a11cc977430e3e61.png";
import imgPlaceholderImage17 from "figma:asset/d624f29a423d2b7f588d1efad2cf6dd425dddae6.png";
import imgPlaceholderImage18 from "figma:asset/86f1a1b10a834fa0395333ab80dccb44ab1c5077.png";
import imgPlaceholderImage19 from "figma:asset/9d58e025dd834bfd349ffa10aeec2f4256d1c38e.png";
import imgPlaceholderImage20 from "figma:asset/ed050303c108e1a09e5f7f89490b152ef9cefae1.png";
import imgPlaceholderImage21 from "figma:asset/c03b711f9d4d8e33731c9aee6d466b55389acb17.png";
import imgPlaceholderImage22 from "figma:asset/ea4f29586e50752b8467ad97d04b2bd0e1abc29a.png";
import imgPlaceholderImage23 from "figma:asset/ed89e918172d22046902a7b7073d1048e014ab59.png";
import imgPlaceholderImage24 from "figma:asset/d6f14c1dc95ccbb6eec06e349ccb5835d4b4aa5e.png";
import imgPlaceholderImage25 from "figma:asset/3af331167337d881473434dc0549c27401cac051.png";
import imgPlaceholderImage26 from "figma:asset/4940ddb60379584602da76a5233ad3e625e9ee93.png";
import imgPlaceholderImage27 from "figma:asset/4209e85f409dcc47dd3e57ec24e817587b8e8b69.png";

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#040405] text-[16px] text-center text-nowrap whitespace-pre">Servicios</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-center w-full" data-name="Content">
      <p className="font-['Lexend:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#ce0e2d] text-[48px] tracking-[-0.48px] w-full">Expertos en soluciones de laboratorio</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#040405] text-[18px] w-full">En LabSolutions Company, nos especializamos en el mantenimiento, diagnóstico y calibración de equipos de laboratorio. Nuestros servicios están diseñados para garantizar el óptimo rendimiento de sus instrumentos.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[768px]" data-name="Section Title">
      <TaglineWrapper />
      <Content />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#040405] text-[24px] text-center tracking-[-0.24px] w-[min-content]">Diagnóstico técnico de instrumentos</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Evaluación para detectar fallas y mejorar el rendimiento del equipo.</p>
      <Button />
    </div>
  );
}

function Column() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
      <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage1} />
        </div>
      </div>
      <Content1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#040405] text-[24px] text-center tracking-[-0.24px] w-[min-content]">
        <p className="mb-0">Mantenimiento</p>
        <p>correctivo</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Reparación para restablecer su funcionamiento adecuado.</p>
      <Button1 />
    </div>
  );
}

function Column1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
      <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage2} />
        </div>
      </div>
      <Content2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <div className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#040405] text-[24px] text-center tracking-[-0.24px] w-[min-content]">
        <p className="mb-0">Calibración y</p>
        <p>preventivo</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Revisión periódica para evitar fallas y asegurar precisión.</p>
      <Button2 />
    </div>
  );
}

function Column2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
      <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage3} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage4} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage5} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage4} />
        </div>
      </div>
      <Content3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#040405] text-[24px] text-center tracking-[-0.24px] w-[min-content]">Implementación de métodos</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Desarrollo y validación de procedimientos analíticos eficientes.</p>
      <Button3 />
    </div>
  );
}

function Column3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Column">
      <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage6} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage7} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage8} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage9} />
        </div>
      </div>
      <Content4 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Row />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[24px] text-black text-center tracking-[-0.24px] w-[min-content]">Capacitación de los instrumentos</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Formación en uso y mantenimiento correcto de los equipos.</p>
      <Button4 />
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[304px]" data-name="Column">
      <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage10} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage11} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage12} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage13} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage14} />
        </div>
      </div>
      <Content6 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[24px] text-black text-center tracking-[-0.24px] w-[min-content]">Instalación de los instrumentos</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Montaje y configuración para la puesta en marcha técnica.</p>
      <Button5 />
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[304px]" data-name="Column">
      <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage15} />
        </div>
      </div>
      <Content7 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ce0e2d] box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[24px] py-[10px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Poppins:Medium',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[24px] text-black text-center tracking-[-0.24px] w-[min-content]">Verificación y calificación operacional</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[16px] text-black text-center w-[min-content]">Pruebas para validar precisión y cumplimiento normativo.</p>
      <Button6 />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[304px]" data-name="Column">
      <div className="h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="Placeholder Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage16} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage17} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage18} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage19} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage20} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage21} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage22} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage23} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage24} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage25} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage23} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage26} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgPlaceholderImage27} />
        </div>
      </div>
      <Content8 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[32px] h-[376px] items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Column4 />
      <Column5 />
      <Column6 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[376px] items-start relative shrink-0 w-full" data-name="Content">
      <Row1 />
    </div>
  );
}

export default function Servicios() {
  return (
    <div className="bg-white relative size-full" data-name="Servicios">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative size-full">
          <SectionTitle />
          <Content5 />
          <Content9 />
        </div>
      </div>
    </div>
  );
}