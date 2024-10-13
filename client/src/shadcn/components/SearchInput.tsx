import { Search } from "lucide-react"
import { Input } from "./ui/input"

function SearchInput() {
  return (
    <section className="flex flex-row gap-2 px-2 py-2 items-center w-[350px]">
        <Input
            placeholder="Search"
        />
        <Search/>
    </section>
  )
}

export default SearchInput