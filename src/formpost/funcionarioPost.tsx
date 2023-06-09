import { ChangeEvent, useState } from "react";
import { Button, Input } from "reactstrap";

type Props =
  {
    onAdd: (
      nomecompleto: string,
      cargo: string,
      email: string,
      confemail: string,
      telefoneum: string,
      departamento: string,
    ) => void;
  }

function CadFuncionario({ onAdd }: Props) {

  const [addNome, setaddNome] = useState('');
  const [addCargo, setaddCargo] = useState('');
  const [addEmail, setaddEmail] = useState('');
  const [addConfEmail, setaddConfEmail] = useState('');
  const [addTelum, setaddTelum] = useState('');
  const [addDepartamento, setaddDepartamento] = useState('');



  const handleAddNomeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddNome(e.target.value)
  }

  const handleAddCargoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddCargo(e.target.value)
  }

  const handleAddEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddEmail(e.target.value)
  }

  const handleAddConfEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddConfEmail(e.target.value)
  }

  const handleAddTelumChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddTelum(e.target.value)
  }

  const handleAddDepartamentoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setaddDepartamento(e.target.value)
  }


  function handleClickButton() {
   if (addNome && addCargo && addEmail && addConfEmail && addTelum && addDepartamento) {
      onAdd(addNome, addCargo, addEmail, addConfEmail, addTelum, addDepartamento);
   } else {
     alert("Preencha todos os campos");
   }
  }

  return (
    <div>
      <h1> Cadastro de Funcionário </h1>
        <form action="">
        <div className='pai'>
          <div className='filha'>
            <label> Nome Completo: </label> 
            <Input value={addNome} onChange={handleAddNomeChange} type="text" placeholder='Digite o nome completo'></Input>
            <label> Cargo: </label> 
            <Input value={addCargo} onChange={handleAddCargoChange} type="text" placeholder='Digite o cargo' ></Input> 
            <label> E-mail: </label> 
            <Input value={addEmail} onChange={handleAddEmailChange} type="email" placeholder='Digite o e-mail' ></Input>
            <label> Confirmação E-mail: </label>
            <Input value={addConfEmail} onChange={handleAddConfEmailChange} type="email" placeholder='Digite o e-mail' ></Input>
          </div>

          <div className='filha'>
            <label> Telefone Celular 1: </label>
            <Input value={addTelum} onChange={handleAddTelumChange} type="text" placeholder='(xx) xxxxx-xxxx'></Input>
            <label> Departamento: </label>
            <Input value={addDepartamento} onChange={handleAddDepartamentoChange} type="text" placeholder='Digite o Departamento' ></Input>
          </div>
        </div>
      

        <div className='botaocad'>
        <Button onClick={handleClickButton} color="success"> Cadastrar </Button>
        </div>
        </form>

    </div>
  )
}


export default CadFuncionario;