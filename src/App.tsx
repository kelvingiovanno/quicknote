import { Route, Routes } from "react-router"

import DashboardLayout from "./layouts/DashboardLayout"

import Dashboard from "./pages/dashboard/Dashboard"
import Notes from "./pages/dashboard/Dashboard"
import Favorites from "./pages/dashboard/Dashboard"
import Trash from "./pages/dashboard/Dashboard"
import Settings from "./pages/dashboard/Dashboard"
import LogOut from "./pages/dashboard/Dashboard"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/auth/LogIn"
import Signup from "./pages/auth/SignUp"

function App() {

  return (
    <>
      <Routes>
        
        <Route path={"/"} element={<DashboardLayout/>} >
          <Route index element={<Dashboard/>}/>
          <Route path={"/notes"} element={<Notes/>}/>
          <Route path={"/favorites"} element={<Favorites/>}/>
          <Route path={"/trash"} element={<Trash/>}/>
          <Route path={"/settings"} element={<Settings/>}/>
          <Route path={"logout"} element={<LogOut/>}/>
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path={"/signin"} element={<Login/>}/>
          <Route path={"/signup"} element={<Signup/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
