
import { LdFilters } from "./components/LdFilter/LdFilters";
import { LdHeader } from "./components/LdHeader";
import { LdSlogan } from "./components/LdSlogan";

export default function Home() {
  return (
    <main>
      <LdHeader />
      <LdSlogan />

      <LdFilters />
    </main>
  )
}
