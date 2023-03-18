import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hom from './components/Hom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
  <Home/>
      <Routes>   <Route path='/' element={<Hom/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      </Routes>
     

        
      </BrowserRouter>

    </div>
  );
}

export default App;
