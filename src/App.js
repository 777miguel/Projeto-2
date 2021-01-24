import React, { useState } from "react";
import "./App.css"

import Biography from './components/Bio'
import Perfil from './components/Profile'
import Track from './components/track'
import ExpContainer from './components/expContainer'
import AsideContainer from './components/sideCont'

function App() {

  const fakeAPI =  
    {
      nome: 'Albert Einstein',
      ocupacao: 'Fisico',
      resumo: 'E=mc²',
      perfilProfissional: 'Relatividade Geral, Relatividade Restrita, Efeito Fotoelétrico.',
      avatar: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frainerzitelmann%2Ffiles%2F2019%2F06%2FE0MG76-e1560965378507-1200x1270.jpg',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '77 77777-7777'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'einstein@albert.com'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Politecnica de Zurique',
          curso: 'Física'
        },
        {
          id: 2,
          instituicao: 'Universidade de Zurique',
          curso: 'Doutorado'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Professor',
          periodo: '1908 - 1925',
          empresa: 'Universidade de Berna',
          local: 'Berna, Suiça',
          conteudo: 'Eletrodinamica, Relatividade Geral, Relatividade Restrita, Movimento Browniano, Efeito Fotoelétrico'
        },
        {
          id: 2,
          cargo: 'Diretor',
          periodo: '1914 - 1925',
          empresa: 'Instituto Kaiser Guilherme de Fisica',
          local: 'Alemanha',
          conteudo: 'Equivalência Massa-energia, Equações de Campo de Einstein, Estatística de Bose-Einstein, Paradoxo EPR'
        }
      ]
  }

  const [data] = useState(fakeAPI)
  return (
    <main>

      <Perfil data={data}/>      
      <Biography data={data}/>
      <Track />
      <AsideContainer data={data}/>   
      <ExpContainer data={data}/>

    </main>
  );
}

export default App;