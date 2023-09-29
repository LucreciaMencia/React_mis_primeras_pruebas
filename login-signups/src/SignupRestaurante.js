import React from 'react'
import { Link } from 'react-router-dom'

function SignupRestaurante() {
    return (
        <div className='login template d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='form_container p-5 rounded custom-bg'>
                <form>
                    <h3 className='text-center'>Registrarme</h3>
                    <div className='mb-2'>
                        <label htmlFor='fnameresto'>Nombre de usuario</label>
                        <input type="text" placeholder='Resto10' className='form-control'></input>
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
                        <label htmlFor='fnameresto'>Nombre del restaurante</label>
                        <input type="text" placeholder='Mi restaurante' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>Ubicación</label>
                        <input type="text" placeholder='Calle 53 N 1234' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>Contacto</label>
                        <input type="text" placeholder='3765829882' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>Horario</label>
                        <input type="text" placeholder='Todos los días de 16hs a 00hs' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>Descripción</label>
                        <textarea type="text" placeholder='Tenemos lo que estás buscando.' className='form-control'></textarea>
                    </div>
                    <div className='d-grid mt-2'>
                        <button className='btn btn-outline-secondary'>Registrarme</button>
                    </div>
                    <p className='text-end mt-2'>
                        <Link to="/signupComensal" className='ms-2'>Registrarme como comensal</Link>
                    </p>
                    <p className='text-end mt-2'>
                        Ya tengo cuenta.<Link to="/iniciar-sesion" className='ms-2'>Iniciar Sesión</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

export default SignupRestaurante