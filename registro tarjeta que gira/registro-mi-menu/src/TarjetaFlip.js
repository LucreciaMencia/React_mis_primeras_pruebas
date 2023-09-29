import FormularioRegistroComensal from "./FormularioRegistroComensal";
import FormularioRegistroRestaurante from "./FormularioRegistroestaurante";

export default function TarjetaFlip(props) {
    const volteada = props.volteada;

    let clasesDeTarjeta = 'card';

    if (volteada) {
        clasesDeTarjeta = 'card is-flipped'
    }

    return (
        <div class="card-container">
            <div className={clasesDeTarjeta}>
                <div class="card-front">
                    <h1>COMENSAL</h1>
                    <FormularioRegistroComensal/>
                </div>
                <div class="card-back">
                    <h1>RESTAURANTE</h1>
                    <FormularioRegistroRestaurante/>
                </div>
            </div>
        </div>
    );
}