import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Motivate from "./Motivate";
import Life from "./Life";
import Inspirational from "./Inspirational";
import Positive from "./Positive";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Motivate" element={<Motivate/>} />
          <Route path="Life" element={<Life/>} />
          <Route path="Positive" element={<Positive/>} />
          <Route path="Inspirational" element={<Inspirational/>} />
         
         
          
</Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
