import svgPaths from "./svg-9hqfzw1bxz";

function WhatsAppSymbol() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="WhatsApp Symbol">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_29_194)" id="WhatsApp Symbol">
          <path clipRule="evenodd" d={svgPaths.p12f4f0f2} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_194">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WhatsAppButtom() {
  return (
    <div className="absolute bg-[#25d366] box-border content-stretch flex gap-[10px] items-center justify-center left-[26px] px-[20px] py-[10px] rounded-[30px] top-[29px]" data-name="WhatsApp Buttom">
      <WhatsAppSymbol />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Contáctanos</p>
    </div>
  );
}

function WhatsAppSymbol1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="WhatsApp Symbol">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_29_194)" id="WhatsApp Symbol">
          <path clipRule="evenodd" d={svgPaths.p12f4f0f2} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_29_194">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WhatsAppButtom1() {
  return (
    <div className="absolute bg-[#25d366] box-border content-stretch flex gap-[10px] items-center justify-center left-[367px] px-[20px] py-[10px] rounded-[30px] top-[29px]" data-name="WhatsApp Buttom">
      <WhatsAppSymbol1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <WhatsAppButtom />
      <WhatsAppButtom1 />
    </div>
  );
}