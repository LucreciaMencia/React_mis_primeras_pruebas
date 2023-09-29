import React from 'react'
import { Link } from 'react-router-dom'
import './Estilos.css'

function SignupComensal() {
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='form_container p-5 rounded custom-bg'>
                <form>
                    <h3 className='text-center'>Registrarme</h3>
                    <div className='mb-2'>
                        <label htmlFor='fnameresto'>Nombre de usuario</label>
                        <input type="text" placeholder='Juan10' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='mail'>Email</label>
                        <input type="email" placeholder='restaurante@mail.com' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type="password" placeholder='**********' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='fnameresto'>Nombre de comensal</label>
                        <input type="text" placeholder='Juan Luis' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='fnameresto'>Apellido de comensal</label>
                        <input type="text" placeholder='Guerra' className='form-control'></input>
                    </div>
                    <div className='d-grid mt-2'>
                        <button className='btn btn-outline-secondary'>Registrarme</button>
                    </div>
                    <p className='text-end mt-2'>
                        <Link to="/signupRestaurante" className='ms-2'>Registrarme como restaurante</Link>
                    </p>
                    <p className='text-end mt-2'>
                        Ya tengo cuenta.<Link to="/iniciar-sesion" className='ms-2'>Iniciar Sesión</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default SignupComensal