import FormularioRegistroComensal from "./FormularioRegistroComensal";
import './TarjetaFlip.css'


export default function TarjetaFlip(props) {
    const volteada = props.volteada;

    let clasesDeTarjeta = 'tarjeta-flip';

    if (volteada) {
        clasesDeTarjeta = 'tarjeta-flip is-flipped'
    }

    return (
        <div class="tarjeta-flip-container">
            <div className={clasesDeTarjeta}>
                <div class="tarjeta-flip-front">
                    <h1>COMENSAL</h1>
                </div>
                <div class="tarjeta-flip-back">
                    <h1>RESTAURANTE</h1> 
                </div>
            </div>
        </div>
    );
}