import React from 'react'

function FormularioRegistroestaurante() {
    return (
        <form>
            <h3 className='text-center'>Registro para restaurante</h3>
            <div className='mb-2'>
                <label htmlFor='mail'>Email</label>
                <input type="email" placeholder='restaurante@mail.com' className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='fnameresto'>Nombre de usuario</label>
                <input type="text" placeholder='restaurante07' className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='password'>Contraseña</label>
                <input type="password" placeholder='Ingrese contraseña' className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='fnameresto'>Nombre del Restaurante</label>
                <input type="text" placeholder='Mi restaurante' className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='lname'>Ubicación</label>
                <input type="text" placeholder='Calle 53 N 1234' className='form-control'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='lname'>Contacto</label>
                <input type="text" placeholder='3764526489' className='form-control'></input>
            </div>
            <div className='d-grid mt-2'>
                <button className='btn btn-outline-secondary'>Registrarme</button>
            </div>
            {/* <p className='text-end mt-2'>
            Ya tengo cuenta.<Link to="/" className='ms-2'>Iniciar Sesión</Link>
        </p> */}
        </form>
    )
}

export default FormularioRegistroestaurante