import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import Hero from "./components/Hero"

const App = () => {

  return (
    <div className='h-screen grid grid-rows-layout'>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </Main>
    </div>
  )
}

export default App
