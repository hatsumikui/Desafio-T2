import React from 'react'
import { useState } from 'react'
// ////////////////////////////////////////////////////////////////

export default function Main() {
  const [contar, setContar] = useState(0);
  const [pare, setPare] = useState();

  function start() {
    const tempo = setInterval(() => {
      setContar((contar) => contar + 1);
    }, 1000);
    setPare(tempo);
  }

  const stop = () => {
    clearInterval(pare);
  };

  const reset = () => {
    setContar(0);
    clearInterval(pare);
  };
// ////////////////////////////////////////////////////////////////

  function mensagem() {
    setTimeout(() => {
      alert("Bem-vindo!");
    }, 2000);
  }

  // //////////////////////////////////////////////////////////////
  function loop() {
    setInterval(() => {
      console.log("Mensagem loop no sistema ;p");
    }, 5000);
  }
  return (
    <main>

      <div className='caixa2'>
        <h3>Clique aqui e algo secreto irá acontecer.</h3>
        <button onClick={loop} className='loop'>Mágica!</button>
      </div>

      <div className='organizar'>
        <h2>Contador: {contar}</h2>
        <button onClick={start} className="start">Começar</button>
        <button onClick={stop} className="stop">Parar</button>
        <button onClick={reset} className="reset">Resetar</button>
      </div>

      <div className='caixa1'>
        <h3>Clique no botão e receba uma mensagem!</h3>
        <button onClick={mensagem} className='mensagem'>Clique aqui!</button>
      </div>
    </main>
  )
}

