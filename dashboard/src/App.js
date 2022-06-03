import Documents from "./Pages/Documents";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dokumenti" exact element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
