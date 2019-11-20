import React, {useState} from 'react';
import Header from '../../components/header/index'
import Card from '../../components/card/index'
import Cadastro from  '../../components/cadastrar/index'
import './style.css'

function Profile() {
  const [visivel, setVisivel] = useState(false);
  const [crushSelecionado, setCrushSelecionado] = useState({})


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

  const editar = crush => {
    setCrushSelecionado(crush);
    setVisivel(true);
};

  const deletar = async crush => {
    console.warn('deletando' + crush.id)
  }

  const test = () => (
    console.log('test')
  )

  const onClose = () => {
    setVisivel(false)
  }

  return (
    <>
    <Header />
    <div className="add" onClick={editar}>
    <i class="fas fa-plus"></i>Adicionar Crush
    </div>
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
    <Cadastro visivel={visivel} onClose={onClose} crush={crushSelecionado}/>
    </>
  );
}


export default Profile;