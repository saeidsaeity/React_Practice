import { useState } from 'react'
import Header from './Header/Header'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
    </>
  )
}

export default App
