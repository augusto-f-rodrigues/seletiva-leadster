import { FilterButton } from "./FilterButton";

export function LdFilters() {
  return (
    <div className="flex flex-row">
      <FilterButton text="Agências" />
      <FilterButton text="Chatbot" />
      <FilterButton text="Marketing Digital" />
      <FilterButton text="Geração de Leads" />
      <FilterButton text="Mídia Paga" />
    </div>
  )
}