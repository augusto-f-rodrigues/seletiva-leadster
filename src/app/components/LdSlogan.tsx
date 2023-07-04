import Image from "next/image";

export function LdSlogan() {
  return (
    <div className="flex flex-col justify-center items-center bg-ld-blue-100 h-[448px] space-y-6 text-center">

      <div className="flex w-fit text-center justify-center border-2 border-ld-blue-200 rounded-bl-none rounded-full">
        <span className="pb-1 pt-1 pl-6 pr-6 text-ld-blue-200 font-black">WEBINARS EXCLUSIVOS</span>
      </div>

      <div className="space-y-3">
        <span className="text-2xl font-semibold">Menos Conversinha,</span>

        <div className="relative w-fit border-b border-black border-opacity-20 pb-4">
          <span className="text-4xl font-bold text-ld-blue-200">
            Mais Conversão
          </span>
          <Image className="absolute top-0 -right-3 z-10" alt="asset-header" src={'/asset-header.png'} width={100} height={100} style={{
            height: 'auto', width: 'auto'
          }} />
        </div>
      </div>

      <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>

    </div>
  )
}