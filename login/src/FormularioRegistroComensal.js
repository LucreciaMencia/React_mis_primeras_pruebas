import React from 'react';
import { Link } from 'react-router-dom';

export default function FormularioRegistroComensal() {

    return (
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
            </form>
    );

}