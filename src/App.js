import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExecutivePage from './Pages/ExecutivePage';
import NonExecutivePage from './Pages/NonExecutivePage';
import Login from './Pages/Login';
import Home  from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/executive" element={< ExecutivePage/>} />
    <Route path="/non-executive" element={< NonExecutivePage/>} />
    <Route path="/" element={< Login/>} />
    <Route path="/home" element={< Home/>} />
    </Routes>
    </BrowserRouter>
  
   
  );
}

export default App;
