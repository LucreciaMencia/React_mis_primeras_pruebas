import React from 'react'
import './Estilos.css'
import { Link } from 'react-router-dom'
import {useState} from 'react';
import TarjetaFlip from './TarjetaFlip';



function Signup() {
    const [esRestaurante, setEsRestaurante] = useState(false)

    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='form_container p-5 rounded custom-bg'>
                <form>
                    <h3 className='text-center'>Registrarme</h3>
                    <div className='mb-2'>
                        <label htmlFor='fname'>Primer Nombre</label>
                        <input type="text" placeholder='Ingrese primer nombre' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='lname'>Apellido</label>
                        <input type="text" placeholder='Ingrese apellido' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Contraseña</label>
                        <input type="password" placeholder='Ingrese contraseña' className='form-control'></input>
                    </div>
                    <div className='d-grid mt-2'>
                        <button className='btn btn-outline-secondary'>Registrarme</button>
                    </div>
                    <p className='text-end mt-2'>
                        Ya tengo cuenta.<Link to="/" className='ms-2'>Iniciar Sesión</Link>
                    </p>
                    <div style={{ margin: '15px' }}>
                        <button type="button" class="btn btn-outline-primary" onClick={() => setEsRestaurante(true)}>Restaurante</button>
                        <button type="button" class="btn btn-outline-primary" onClick={() => setEsRestaurante(false)}>Comensal</button>
                    </div>
                </form>
            </div>
            <TarjetaFlip volteada={esRestaurante}/>
        </div>
    )
}

export default Signup