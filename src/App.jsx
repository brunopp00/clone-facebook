import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='box-principal'>
        <div className='box1'>
            <img src="./imagens/logo.png" alt="" />
            <p>O Facebook ajuda você a se conectar e<br/>compartilhar com as pessoas que<br/>fazer parte da sua vida</p>
        </div>
        <div className='box2'>
            <input type="text" placeholder='Email ou Telefone' />
            <input type="text" placeholder='Senha' />
            <button className='entrar'>Entrar</button>
            <a href="#">Esqueceu a senha?</a>
            <div style={{display:'flex', justifyContent:'center', marginTop:'50px'}}>
                <button className='criar'>Criar nova conta</button>
            </div>
        </div>
    </div>
  )
}

export default App
