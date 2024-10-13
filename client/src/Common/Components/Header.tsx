import SearchInput from "@/shadcn/components/SearchInput"

function Header() {
  return (
   <header className="w-full border-b">
    <section className="flex flex-row justify-between items-center h-[60px] px-4 max-w-[1290px] mx-auto">
        <section>
            <h1 className="text-xl font-semibold">Prep Hacks</h1>
        </section>
        <section>
          <SearchInput/>
        </section>
        <section>
            Search
        </section>
    </section>
   </header>
  )
}

export default Header