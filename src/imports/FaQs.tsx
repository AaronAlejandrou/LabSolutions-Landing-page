function Spacer() {
  return (
    <div className="opacity-0 relative shrink-0 size-[24px]" data-name="~spacer">
      <div className="absolute bg-white inset-0" data-name="4px">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[29.17%_16.67%_37.5%_16.67%] leading-[18px] not-italic text-[12px] text-black text-center text-nowrap tracking-[0.96px] uppercase whitespace-pre">24</p>
    </div>
  );
}

function Headings() {
  return (
    <div className="absolute content-stretch flex flex-col h-[138px] items-center left-1/2 top-[calc(50%-277px)] translate-x-[-50%] translate-y-[-50%]" data-name="Headings">
      <div className="flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-end leading-[0] not-italic relative shrink-0 text-[#ce0e2d] text-[36px] text-center text-nowrap">
        <p className="leading-[40px] whitespace-pre">Preguntas Frecuentes</p>
      </div>
      <Spacer />
      <p className="font-['Poppins:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-black text-center w-[418.703px]">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Plus">
      <div className="absolute inset-[-5.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Plus">
            <path d="M6.66176 0.661765V12.6618" id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.32353" />
            <path d="M12.6618 6.66176H0.661765" id="Vector_2" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.32353" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedPlus() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Line Rounded/Plus">
      <Plus />
    </div>
  );
}

function AccordionTop() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Accordion Top">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#ce0e2d] text-[16px] text-nowrap text-right whitespace-pre">Lorem ipsum dolor sit amet consectetur?</p>
      <LineRoundedPlus />
    </div>
  );
}

function AccordionContent() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="Accordion Content">
      <AccordionTop />
    </div>
  );
}

function AccordionCard() {
  return (
    <div className="bg-white relative shrink-0 w-[584px]" data-name="Accordion Card">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-0 py-[20px] relative rounded-[inherit] w-[584px]">
        <AccordionContent />
      </div>
      <div aria-hidden="true" className="absolute border-[#e1e4ed] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

function Close() {
  return (
    <div className="absolute inset-[17.5%]" data-name="Close">
      <div className="absolute inset-[-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <g id="Close">
            <path d="M9.75 0.65L0.65 9.75" id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            <path d="M0.65 0.65L9.75 9.75" id="Vector_2" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedClose() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Line Rounded/Close">
      <Close />
    </div>
  );
}

function AccordionTop1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Accordion Top">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#ce0e2d] text-[16px] text-nowrap whitespace-pre">Lorem ipsum dolor sit amet consectetur?</p>
      <LineRoundedClose />
    </div>
  );
}

function AccordionBottom() {
  return (
    <div className="box-border content-stretch flex items-start pb-[14px] pt-0 px-0 relative shrink-0 w-full" data-name="Accordion Bottom">
      <p className="font-['Poppins:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[14px] text-black w-[584px]">Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.</p>
    </div>
  );
}

function AccordionContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="Accordion Content">
      <AccordionTop1 />
      <AccordionBottom />
    </div>
  );
}

function AccordionCard1() {
  return (
    <div className="bg-white relative shrink-0 w-[584px]" data-name="Accordion Card">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip pb-[16px] pt-[20px] px-0 relative rounded-[inherit] w-[584px]">
        <AccordionContent1 />
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px] border-[rgba(0,0,0,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-[-0.5px]" />
    </div>
  );
}

function Plus1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Plus">
      <div className="absolute inset-[-5.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Plus">
            <path d="M6.66176 0.661765V12.6618" id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.32353" />
            <path d="M12.6618 6.66176H0.661765" id="Vector_2" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.32353" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedPlus1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Line Rounded/Plus">
      <Plus1 />
    </div>
  );
}

function AccordionTop2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Accordion Top">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#ce0e2d] text-[16px] text-nowrap text-right whitespace-pre">Lorem ipsum dolor sit amet?</p>
      <LineRoundedPlus1 />
    </div>
  );
}

function AccordionContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="Accordion Content">
      <AccordionTop2 />
    </div>
  );
}

function AccordionCard2() {
  return (
    <div className="bg-white relative shrink-0 w-[584px]" data-name="Accordion Card">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-0 py-[20px] relative rounded-[inherit] w-[584px]">
        <AccordionContent2 />
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px] border-[rgba(0,0,0,0.2)] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-[-0.5px]" />
    </div>
  );
}

function Plus2() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Plus">
      <div className="absolute inset-[-5.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Plus">
            <path d="M6.66176 0.661765V12.6618" id="Vector" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.32353" />
            <path d="M12.6618 6.66176H0.661765" id="Vector_2" stroke="var(--stroke-0, #CE0E2D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.32353" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LineRoundedPlus2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Line Rounded/Plus">
      <Plus2 />
    </div>
  );
}

function AccordionTop3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Accordion Top">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#ce0e2d] text-[16px] text-nowrap text-right whitespace-pre">Lorem ipsum dolor sit amet?</p>
      <LineRoundedPlus2 />
    </div>
  );
}

function AccordionContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full" data-name="Accordion Content">
      <AccordionTop3 />
    </div>
  );
}

function AccordionCard3() {
  return (
    <div className="bg-white relative shrink-0 w-[584px]" data-name="Accordion Card">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-0 py-[20px] relative rounded-[inherit] w-[584px]">
        <AccordionContent3 />
      </div>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-0.5px]" />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Cards">
      <AccordionCard />
      <AccordionCard1 />
      <AccordionCard2 />
      <AccordionCard3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[10px] h-[503px] items-start left-1/2 px-[24px] py-[8px] rounded-[8px] top-[calc(50%+93.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Cards />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <Headings />
      <Container />
    </div>
  );
}

export default function FaQs() {
  return (
    <div className="bg-white relative size-full" data-name="FAQs">
      <Group />
    </div>
  );
}