'use client'
import { useState } from "react"

interface FilterButtonProps {
  text: string
}
export function FilterButton({ text }: FilterButtonProps) {
  const [filterActive, SetFilterActive] = useState(false);

  const onFilterActive = () => {
    SetFilterActive(!filterActive)
  }

  return (
    <button onClick={onFilterActive} className={`rounded-full w-fit border border-zinc-600 hover:border-ld-blue-200 hover:text-ld-blue-200 pt-1 pb-1 pl-4 pr-4 ${filterActive && 'border-none bg-ld-blue-200 text-white  hover:text-white hover:border-white hover:bg-blue-500'}`}>{text}</button>
  )
}