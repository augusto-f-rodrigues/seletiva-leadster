import Image from "next/image";

export function LdHeader() {
  const imageStyle = {
    height: 'auto', width: 'auto'
  }
  return (
    <div className="flex items-center justify-center h-20">
      <Image alt="leadster-logo" src={'/logo.png'} style={imageStyle} width={100} height={100} />
    </div>
  )
}