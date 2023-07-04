'use client'
import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io'
import { FilterButton } from './FilterButton';
import { FilterListButton } from './FilterListButton';

export function LdFiltersMobile() {
  const [modalState, setModalState] = useState(false)
  return (
    <section className="section-container mt-6">

      <div className="lg:hidden flex-row w-5/6 flex justify-end">
        <button onClick={() => setModalState(!modalState)} className="p-2 rounded-full flex items-center justify-center border w-fit h-fit border-zinc-600 cursor-pointer hover:text-white hover:border-white hover:bg-blue-500 transition-all">
          <FaFilter />
        </button>

        <div className={`lg:hidden ${modalState ? 'absolute' : 'hidden'} top-1/2 z-10 bg-white border-zinc-600 border rounded-lg p-4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4`}>

          <button><IoMdClose onClick={() => setModalState(!modalState)} className="p-2 rounded-full flex items-center justify-center border w-fit h-fit border-zinc-600 cursor-pointer hover:text-white hover:border-white hover:bg-blue-500 transition-all" /></button>

          <span>Filtros:</span>

          <div className="space-y-2 w-full items-center justify-center flex 
          flex-wrap">
            <FilterButton text="Agências" />
            <FilterButton text="Chatbot" />
            <FilterButton text="Marketing Digital" />
            <FilterButton text="Geração de Leads" />
            <FilterButton text="Mídia Paga" />
          </div>

          <FilterListButton />
        </div>

      </div>


    </section>
  )
}