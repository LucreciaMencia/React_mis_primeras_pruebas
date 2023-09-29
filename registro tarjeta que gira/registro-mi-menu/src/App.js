import './App.css';
import TarjetaFlip from './TarjetaFlip';
import {useState} from 'react';

function App() {

  const [volteada, setVolteada] = useState(false)

  return (
    <div className="App">
      <div style={{ margin: '15px' }}>
        <button type="button" class="btn btn-outline-primary" onClick={() => setVolteada(true)}>Restaurante</button>
        <button type="button" class="btn btn-outline-primary" onClick={() => setVolteada(false)}>Comensal</button>
      </div>
      
      <TarjetaFlip volteada={volteada}/>
    </div>
  );
}

export default App;