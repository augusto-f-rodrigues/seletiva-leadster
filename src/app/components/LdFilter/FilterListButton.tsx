'use client'
import { useState } from "react"


export function FilterListButton() {
  const [filterActive, setFilterActive] = useState('dataPublicacao');

  return (
    <div className="flex flex-row space-x-2 items-center">
      <span>Ordenar por:</span>
      <select name="listFilter" onChange={e => setFilterActive(e.target.value)} className={`rounded-lg w-fit border border-zinc-600 hover:border-ld-blue-200 hover:text-ld-blue-200 pt-1 pb-1 pl-4 pr-4`}>
        <option value="dataPublicacao">Data de Publicação</option>
        <option value="emAlta">Em Alta</option>
      </select>
    </div>
  )
}