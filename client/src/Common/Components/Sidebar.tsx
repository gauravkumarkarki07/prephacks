import { House, LifeBuoy, Tag } from "lucide-react"

function Sidebar() {
  return (
    <section>
        <nav className="flex flex-col gap-6 px-4 py-4 h-screen border-r">
            <ul className="flex flex-col gap-3 mt-5">
                <li className="flex flex-row gap-2 items-center">
                  <House size={20}/>
                  <span>Home</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <LifeBuoy size={20}/>
                  <span>Resources</span>
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <Tag size={20}/>
                  <span>Tags</span>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Sidebar