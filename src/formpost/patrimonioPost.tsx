import { ChangeEvent, useState } from "react";
import { Button, Input } from "reactstrap";

type Props =
  {
    onAdd: (
      nome: string,
      modelo: string,
      tipo: string,
      grupo: string,
      valor: string,
      descricao: string,
    ) => void;
  }

function CadPatrimonio({ onAdd }: Props) {

  const [addNome, setaddNome] = useState('');
  const [addModelo, setaddModelo] = useState('');
  const [addTipo, setaddTipo] = useState('');
  const [addGrupo, setaddGrupo] = useState('');
  const [addValor, setaddValor] = useState('');
  const [addDescricao, setaddDescricao] = useState('');


  const handleAddNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddNome(e.target.value)
  }

  const handleAddModeloChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddModelo(e.target.value)
  }

  const handleAddTipoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddTipo(e.target.value)
  }
  
  const handleAddGrupoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddGrupo(e.target.value)
  }

  const handleAddValorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddValor(e.target.value)
  }
  
  const handleAddDescricaoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddDescricao(e.target.value)
  }


  function handleClickButton() {
   if (addNome && addModelo && addTipo && addGrupo && addValor && addDescricao) {
      onAdd(addNome, addModelo, addTipo, addGrupo, addValor, addDescricao);
   } else {
     alert("Preencha todos os campos");
   }
  }


  return (
    <div>
      <h1> Cadastro de Patrimônio </h1>
        <form action="">
        <div className='pai'>
          <div className='filha'>
            <label> Nome do Patrimônio: </label> 
            <Input value={addNome} onChange={handleAddNomeChange} type="text" placeholder='Digite o nome do item'></Input>
            <label> Modelo: </label>
            <Input value={addModelo} onChange={handleAddModeloChange} type="text" placeholder='Digite o modelo' ></Input>  
            <label> Tipo: </label>
            <Input value={addTipo} onChange={handleAddTipoChange} type="text" placeholder='Digite o tipo' ></Input>  
            <label> Grupo: </label>
            <Input value={addGrupo} onChange={handleAddGrupoChange} type="text" placeholder='Digite o Grupo' ></Input> 
          </div>

          <div className='filha'>
            <label> Valor Real R$: </label>
            <Input value={addValor} onChange={handleAddValorChange} type="text" placeholder='Digite o valor da compra' ></Input>  

            <label> Descrição: </label> 
            <Input value={addDescricao} onChange={handleAddDescricaoChange} type="text" placeholder='Descreva do item'></Input>  
          </div>
        </div>
      

        <div className='botaocad'>
         <Button onClick={handleClickButton} color="success"> Cadastrar </Button>
        </div>
        </form>
    </div>
  )
}


export default CadPatrimonio;