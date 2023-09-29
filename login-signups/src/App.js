import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import SignupRestaurante from './SignupRestaurante'
import SignupComensales from './SignupComensal'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/iniciar-sesion' element={<Login />}></Route>
      <Route path='/signupRestaurante' element={<SignupRestaurante />}></Route>
      <Route path='/signupComensal' element={<SignupComensales />}></Route>
    </Routes>
    </BrowserRouter>    
  );
}

export default App;
