import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar/>
        <main>
          <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
