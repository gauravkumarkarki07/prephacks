import { Outlet } from "react-router-dom"
import Sidebar from "../Common/Components/Sidebar"
import Header from "../Common/Components/Header"
import Footer from "../Common/Components/Footer"

function AuthenticatedRoute() {
  return (
    <section className="flex flex-col">
      <Header />
      <section className="flex flex-row max-w-[1290px] mx-auto w-full">
        <section className="w-[22%]">
          <Sidebar />
        </section>
        <section className="w-full px-2 py-2">
          <Outlet />
        </section>
      </section>
          <hr/>
      <Footer/>
    </section>
  )
}

export default AuthenticatedRoute