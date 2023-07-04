import Image from "next/image";

export function LdHeader() {
  return (
    <div className="flex items-center justify-center h-24">
      <Image alt="leadster-logo" src={'/logo.png'} style={{
        height: 'auto', width: 'auto', scale: 1.5
      }} width={100} height={100} />
    </div>
  )
}