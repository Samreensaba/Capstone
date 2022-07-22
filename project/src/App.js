import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from './components/MyNav';
import Register from "./components/Register";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <MyNav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/registration" element={<Register/>}/>
    </Routes>
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
