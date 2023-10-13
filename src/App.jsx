import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
 } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Navbar />} >
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="donate" element={<Donate />} />
    </Route>
  ))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
