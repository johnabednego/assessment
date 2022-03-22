import Home from "./pages/home/Home";
import ReadMore from "./pages/readMore/ReadMore";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return <Router>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/:id" element={<ReadMore />} ></Route>
          </Routes>
        </Router>;
}

export default App;
