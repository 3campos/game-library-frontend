// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import New from "./components/NewGame"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/new" element={<New />} />

      </Routes>
    </Router>
  );
}

export default App;
