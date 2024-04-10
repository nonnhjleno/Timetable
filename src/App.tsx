import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import NoMatch from "./routes/NoMatch"

const App = () => {

  return (
    <>
      <Routes>
        <Route path='*' element={<NoMatch />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
