
import { LdFilters } from "./components/LdFilter/LdFilters";
import { LdFiltersMobile } from "./components/LdFilter/LdFiltersMobile";
import { LdHeader } from "./components/LdHeader";
import { LdSlogan } from "./components/LdSlogan";

export default function Home() {
  return (
    <main>
      <LdHeader />
      <LdSlogan />

      <LdFilters />
      <LdFiltersMobile />
    </main>
  )
}
