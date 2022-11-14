// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import New from "./components/NewGame"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//define baseURL
// let baseURL = process.env.REACT_APP_BACKEND_URL

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