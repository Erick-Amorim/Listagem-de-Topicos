import React, { useState } from 'react'

const TopicosForm = ({ addTopico }) => {
  const [value, setValue] = useState("");
  const [autor, setAutor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTopico(value, autor);
    setValue('');
    setAutor('');
  };

  return <div className="topicos-form">
    <h2>Criar Tópico</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Escreva o tópico aqui...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="text"
        placeholder='Escreva o nome do autor aqui...'
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <button type='submit'>Criar tópico</button>
    </form>
  </div>
}

export default TopicosForm
