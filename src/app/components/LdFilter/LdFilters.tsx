import { FilterButton } from "./FilterButton";
import { FilterListButton } from "./FilterListButton";


export function LdFilters() {

  return (
    <section className="section-container">

      <div className="lg:flex flex-row flex-wrap flex-1 max-w-5xl hidden">
        <div className="space-x-2 flex-1">
          <FilterButton text="Agências" />
          <FilterButton text="Chatbot" />
          <FilterButton text="Marketing Digital" />
          <FilterButton text="Geração de Leads" />
          <FilterButton text="Mídia Paga" />
        </div>

        <FilterListButton />
      </div>



    </section>
  )
}