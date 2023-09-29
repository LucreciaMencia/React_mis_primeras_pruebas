import React from 'react'
import { Link } from 'react-router-dom'
import './Estilos.css'


function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
    <div className='form_container p-5 rounded custom-bg'>
        <form>
            <h3 className='text-center'>Iniciar Sesión</h3>
            <div className='mb-2'>
                <label htmlFor='mail'>Email</label>
                <input type="email" placeholder='Ingrese su correo' className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Contraseña</label>
                <input type="password" placeholder='Ingrese su contraseña' className='form-control'></input>
            </div>
            {/* <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                <label htmlFor='check' className='custom-input-label ms-2'>
                    Recuérdame
                </label>
            </div> */}
            <div className='d-grid'>
                <button className='btn btn-outline-secondary'>Iniciar Sesión</button>
            </div>
            <p className='text-end mt-2'>
                <Link to="/signupRestaurante" className='ms-2'>Registrarme como restaurante</Link>
            </p>
            <p className='text-end mt-2'>
                {/* Olvidaste tu <a href=''>Contraseña?</a> */}
                <Link to="/signupComensal" className='ms-2'>Registrarme como comensal</Link>
            </p>
            
        </form>
    </div>
</div>
  )
}

export default Login