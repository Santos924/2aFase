import { useState } from 'react'
import './Sorteio.css'
import { useEffect } from 'react'

function Sorteio() {
    const[inputNome, setInputNome] = useState('')
    const[nomes, setnomes] = useState([])

    useEffect(() =>   
      console.log(nomes)
    ,[nomes])

    function cadastrarNome(){
        setnomes([inputNome, ...nomes])
        console.log(nomes);

    }
    return (
        <div className='container-sorteio'>
            <h2>!! SORTEIO !!</h2>
            <p>Inscreva-se aqui para o sorteio de uma linda camiseta</p>

            <label htmlfor="">Nome</label>
            <input type="text"
                value={inputNome}
                onChange={(event) => setInputNome(event.target.value)}
            />
            <button onClick={cadastrarNome}>Cadastrar</button>
            <button>Faltou Sortear</button>


        </div>

    )
}

        
    
