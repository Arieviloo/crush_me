import React, {useState, useEffect} from 'react';
import {Modal, Button, Form, Input} from 'antd'
import './style.css'


export default function Cadastrar(props) {
  const [nome, setNome] = useState('');
  const [conheci, setConheci] = useState('');
  const [qualidade, setQualidade] = useState('');

  useEffect(() => {
    setNome(props.crush.nome);
    setConheci(props.crush.conheci);
    setQualidade(props.crush.qualidade);
  }, [props.crush])


  const handleCancel = () => {
    props.onClose();
  }
  const submit = () => {
    console.log('salvo')
  }

  return (
    <Modal
    title="Cadastrar Crush"
    visible={props.visivel}
    onCancel={handleCancel}
    footer={[
      <Button key="cancel" onClick={() => props.onClose()} type="link">
        CANCELAR
      </Button>,
      <Button key="submit" onClick={() => submit()} type="link">
        SALVAR
      </Button>,
    ]}
  >
    <Form layout="vertical">
      <Form.Item label="nome">
        <Input value={nome} onChange={e => setNome(e.target.value)}/>
      </Form.Item> 
      <Form.Item label="conheci">
        <Input value={conheci} onChange={e => setConheci(e.target.value)}/>
      </Form.Item> 
      <Form.Item label="qualidade">
        <Input value={qualidade} onChange={e => setQualidade(e.target.value)}/>
      </Form.Item> 

    </Form>
  </Modal>
  );
}
