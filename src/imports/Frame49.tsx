import img from "figma:asset/2a767d84a55e281636ad5fa00a38a42811ff70bb.png";

function Frame() {
  return (
    <div className="absolute bg-[#ccccce] h-[98px] leading-[0] left-[52px] not-italic overflow-clip rounded-[20px] text-[20px] text-black text-center text-nowrap top-[257px] w-[304px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center left-[152px] top-[27px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Espectrofotómetro UV-Vis</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center left-[80.5px] top-[49px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Genesys 150</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:ExtraLight',sans-serif] justify-center left-[50.5px] top-[71px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Marca</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[rgba(204,204,206,0)] h-[98px] leading-[0] left-[52px] not-italic overflow-clip rounded-[20px] text-[20px] text-black text-center text-nowrap top-[273px] w-[304px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center left-[152px] top-[27px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Espectrofotómetro UV-Vis</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center left-[80.5px] top-[49px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Genesys 150</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:ExtraLight',sans-serif] justify-center left-[50.5px] top-[71px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Marca</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[rgba(204,204,206,0)] h-[98px] leading-[0] left-[52px] not-italic overflow-clip rounded-[20px] text-[20px] text-center text-nowrap text-white top-[273px] w-[304px]">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center left-[152px] top-[27px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Espectrofotómetro UV-Vis</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center left-[80.5px] top-[49px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Genesys 150</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:ExtraLight',sans-serif] justify-center left-[50.5px] top-[71px] translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Marca</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute bg-white h-[446px] left-[32px] overflow-clip rounded-[20px] top-[49px] w-[408px]" data-name="Product Card">
        <Frame />
        <div className="absolute bg-[#ce0e2d] box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center left-[91px] px-0 py-[20px] rounded-[10px] top-[367px] w-[225px]" data-name="Boton Component 2">
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white">
            <p className="leading-[normal] whitespace-pre">Mas informacion</p>
          </div>
        </div>
        <div className="absolute h-[215px] left-[42px] rounded-[20px] top-[30px] w-[322.5px]" data-name="IMG_9757 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img} />
        </div>
      </div>
      <div className="absolute bg-[#ce0e2d] h-[446px] left-[499px] overflow-clip rounded-[20px] top-[49px] w-[408px]" data-name="Product Card">
        <Frame2 />
        <div className="absolute bg-white box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center left-[91px] px-0 py-[20px] rounded-[10px] top-[371px] w-[225px]" data-name="Boton Component 2">
          <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ce0e2d] text-[20px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Mas informacion</p>
          </div>
        </div>
        <div className="absolute h-[273px] left-0 rounded-[20px] top-0 w-[409px]" data-name="IMG_9757 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img} />
        </div>
      </div>
      <div className="absolute bg-[#54565a] h-[446px] left-[499px] overflow-clip rounded-[20px] top-[542px] w-[408px]" data-name="Product Card">
        <Frame3 />
        <div className="absolute bg-white box-border content-stretch flex gap-[10px] h-[49px] items-center justify-center left-[91px] px-0 py-[20px] rounded-[10px] top-[371px] w-[225px]" data-name="Boton Component 2">
          <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#54565a] text-[20px] text-center text-nowrap">
            <p className="leading-[normal] whitespace-pre">Mas informacion</p>
          </div>
        </div>
        <div className="absolute h-[273px] left-0 rounded-[20px] top-0 w-[409px]" data-name="IMG_9757 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={img} />
        </div>
      </div>
    </div>
  );
}