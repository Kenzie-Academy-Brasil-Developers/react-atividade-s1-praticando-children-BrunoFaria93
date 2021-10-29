import './App.css';
import CenteredCard from './components/CenteredCard'

function App() {
  const descricao = 'Oi, eu sou uma Children! O vermelho é meu pai e o azul é meu avô!'
  return (

    <div className="App">
        <CenteredCard children={descricao}/>
    </div>
  );
}

export default App;
