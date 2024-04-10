import { Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import NoMatch from "./routes/NoMatch"
import Timetable from "./routes/Timetable"

const App = () => {

  return (
    <>
      <Routes>
        <Route path='*' element={<NoMatch />} />
        <Route path="/" element={<Home />}>
          <Route path=":semesterId" element={<Timetable />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
