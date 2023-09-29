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
                    <FormularioRegistroComensal/>
                </div>
                <div class="card-back">
                    <FormularioRegistroRestaurante/>
                </div>
            </div>
        </div>
    );
}