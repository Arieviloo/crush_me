import React from 'react';
import Header from '../../components/header/index'
import Card from '../../components/card/index'
import './style.css'

export default function profile() {
  const crushs = [ 
    {
      id:1,
      nome: 'betina',
      conheci: 'ali na padaria',
      qualidade: 'queima rosca',
    },
    {
      id:2,
      nome: 'malu',
      conheci: 'ali na padaria',
      qualidade: 'queima rosca',
    },
    {
      id:3,
      nome: 'lud',
      conheci: 'ali na padaria',
      qualidade: 'queima rosca',
    },

  ]

  const editar = crush => (
    console.log('editando' + crush.id)
  );

  const deletar = async crush => (
    console.warn('deletando' + crush.id)
  )

  return (
    <>
    <Header />
    <div className="row">

    {
      crushs.map(crush => (
        <Card 
          key={crush.id}
          nome={crush.nome}
          conheci={crush.conheci}
          qualidade={crush.qualidade}
          edit={() => editar(crush)}
          del={() => deletar(crush)}
        />
      ))
    }
    </div>
    </>
  );
}
