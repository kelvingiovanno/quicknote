import { Route, Routes } from "react-router"

import DashboardLayout from "./layouts/DashboardLayout"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<DashboardLayout/>} >
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
