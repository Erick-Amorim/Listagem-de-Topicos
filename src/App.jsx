import { useState } from 'react'
import Topicos from './components/Topicos';
import TopicosForm from './components/TopicosForm';

import "./App.css";

function App() {
  const [topicos, setTopicos] = useState([]);

  const ativarTopico = () => {
    let idPrompt = prompt('Digite o código do tópico');
    topicos.map(item => {
      if (item.id == idPrompt) {
        if (confirm(`${item.descricao} e ${item.autor}`) === true) {
              item.active = true
        }
      }
      }
    )
    console.log(topicos);
  }

  const encerrarTopico = () => {
    let idPrompt = prompt('Digite o código do tópico');
    topicos.map(item => {
      if (item.id == idPrompt) {
        if (prompt(`Digite a senha`) === 'secret') {
          alert('Tópico encerrado!');
          item.active = false
        }
      }
      }
    )
    console.log(topicos);
  }

  const addTopico = (descricao, autor) => {
    const novosTopicos = [
      ...topicos,
      {
        id: Math.floor(Math.random() * 1000),
        descricao,
        autor,
        active: false
      },
    ];

    setTopicos(novosTopicos);
    console.log(topicos);
  }

  return (
    <div className='app'>
      <h1>Tópicos</h1>
      <button onClick={ativarTopico}>Ativar tópico</button>
      <button onClick={encerrarTopico}>Encerrar tópico</button>
      <div className="topicos-list">
        {topicos.map((topicos) => (
          <Topicos key={topicos.id} topicos={topicos}/>
        ))}
      </div>
      <TopicosForm addTopico={addTopico} />
    </div>
  )
}

export default App
