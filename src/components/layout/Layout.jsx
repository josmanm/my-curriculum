import { Outlet } from "react-router-dom"
import NavBar from "../navBar/NavBar"
function Layout() {
  return (
    <main>
        <NavBar/>
        <Outlet/>
    </main>
  )
}

export default Layout