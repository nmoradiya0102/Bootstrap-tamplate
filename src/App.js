import { Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Atoms/Header/Navbar';
import adminNavbar from './components/Admin/Header/adminNavbar';
import List from './components/Admin/Pages/List';
import userNav from './components/User/Header/userNav';
import Product from './components/User/Pages/Product';
import Home from './components/Admin/Pages/Home';
import Login from './components/Atoms/Body/Login';
import About  from "./components/User/Pages/About";
import { useEffect , useState } from 'react';

function App() {

  const role = 'user';

  if(role === 'admin'){
    return(
      <>
        <Navbar data = {adminNavbar}/>
        <Routes>
          <Route path='/' element = {<home />} />
          <Route path='/list' element = {<List />} />
        </Routes>
      </>
    );
  }
  else if (role === 'user'){
    return (
      <>
        <Navbar data = {userNav} />
        <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/product' element = {<Product />} />
        <Route path='/About' element = {<About />} />

        </Routes>
      </>
    );
  }


  else {
    return <Login />;
  }
}

export default App;
