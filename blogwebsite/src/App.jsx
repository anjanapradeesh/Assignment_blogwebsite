import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddBlog from './components/AddBlog'


function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/AddBlog" element={<AddBlog/>}></Route>
      </Routes>
    </>
  )
}

export default App
