import "./App.css";
import AddUser from "./pages/addUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Records from "./pages/records";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/records" element={<Records />} />
            <Route path="*" element={<Home />} />
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
