import SearchInput from "@/shadcn/components/SearchInput"

function Header() {
  return (
   <header className="flex flex-row justify-between items-center h-[50px] py-2 px-4 border-b">
        <section>
            <h1 className="text-xl font-semibold">Prep Hacks</h1>
        </section>
        <section>
          <SearchInput/>
        </section>
        <section>
            Search
        </section>
   </header>
  )
}

export default Header