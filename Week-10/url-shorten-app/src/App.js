import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Features from './Component/Features';
import Pricing from './Component/Pricing';
import LogIn from './Component/LogIn';
import SignUp from './Component/SignUp';
import Error from './Component/Error';
import Resources from './Component/Resources';
import List from './Component/List';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <List></List>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route element={<Error/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
