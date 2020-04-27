import React, { useState } from 'react';
import logo from './assets/logo.png';
import adImg from './assets/adImg.png';
import './App.css';

function App() { 
  const [binaryInput, setBinaryInput] = useState('')
  const [decimalInput, setDecimalInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
    
  const onButtonSubmit = event => { // Realiza a conversão no envio do formulário.

    event.preventDefault() // Impede a atualização do navegador.    
    
    if (binaryInput.match(/^[0-1]+$/g) === null) { // Verifica se possui 0 ou 1.
      setErrorMessage('Digite um valor binario sem espaços')
      return
    }

  setErrorMessage(' ')

  const result = parseInt(binaryInput, 2) // Converte para base binária.

  setDecimalInput(result)

  }
  
  return (
    <div className="App">
      <div className="content">
        <br/>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <section>
          <form onSubmit={onButtonSubmit}>
            {errorMessage && <a> {errorMessage} </a>}
            <br/>
            <input
              type="text"
              name="binario"
              maxLength="8"
              placeholder="Digite um valor binário"
              value={binaryInput}
              onChange={event => setBinaryInput(event.target.value)}
            />
            <button
              className="button"
              type="submit"
            >
              convert
            </button>
            <input
              type="text"
              name="decimal"
              placeholder="Resultado em decimal"
              value={decimalInput}
              disabled
            />
          </form>            
        </section>
        <br/>        
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
        Clique para seu cupom de desconto!
        </a>
        <div className="adArea">
          <img src={adImg} alt=""/>
        </div>
        <br/>
        <p>Gustavo Gomes ® All rights reserved. - 2020</p>
      </div>
    </div>
  )
}

export default App;