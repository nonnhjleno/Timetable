import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"

const App = () => {

  return (
    <>
      <h1 className="text-4xl">Timetable</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
