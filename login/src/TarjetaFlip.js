import FormularioRegistroComensal from './FormularioRegistroComensal';
import FormularioRegistroestaurante from './FormularioRegistroestaurante';
import './TarjetaFlip.css';
import { useState } from 'react';


export default function TarjetaFlip(props) {
    const [esRestaurante, setEsRestaurante] = useState(true)

    let clasesDeTarjeta = 'tarjeta-flip';

    if (esRestaurante) {
        clasesDeTarjeta = 'tarjeta-flip is-flipped'
    }

    return (
        <div className="tarjeta-flip-container ">
            <div className={clasesDeTarjeta}>
                <div className="form_container p-5 rounded custom-bg tarjeta-flip-front">
                    <FormularioRegistroComensal/>
                </div>
                <div className="form_container p-5 rounded custom-bg tarjeta-flip-back">
                    <FormularioRegistroestaurante/>
                </div>
            </div>
            <div style={{ margin: '15px' }}>
                <button type="button" className="btn btn-outline-primary" onClick={() => setEsRestaurante(true)}>Restaurante</button>
                <button type="button" className="btn btn-outline-primary" onClick={() => setEsRestaurante(false)}>Comensal</button>
            </div>
        </div>
    );
}