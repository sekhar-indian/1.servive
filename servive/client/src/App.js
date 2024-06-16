import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/navbar';
import Home  from './components/home/home';
import Login from './components/athontication/login';
import Products from './components/products/product';
import Signup from './components/athontication/signup';
function App() {
  return (
   <body>
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login'element={<Login />}></Route>
      </Routes>
      <Products/>
    </BrowserRouter>
    </body>
  );  
}

export default App;
