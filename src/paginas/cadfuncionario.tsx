import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import { Input, Button } from 'reactstrap';


function Funcionario () {
    
    return(
      <div>
        <Cabecalho
          cabTexto1={"Início"}
          cabTexto2={"Cad. Usuário"}
          cabTexto3={"Cad. Funcionário"}
          cabTexto4={"Cad. Patrimônio"}
          cabTexto5={"Monitorar"}
          cabTexto6={"Sair"}
        />
        <h1> Cadastro de Funcionário </h1>
        <div className='pai'>
          <div className='filha'>
            <label> Nome Completo: </label> 
            <Input type="text" placeholder='Digite o nome completo'></Input>
            <label> Cargo: </label> 
            <Input type="text" placeholder='Digite o cargo' ></Input> 
            <label> E-mail: </label> 
            <Input type="email" placeholder='Digite o e-mail' ></Input>
            <label> Confirmação E-mail: </label>
            <Input type="email" placeholder='Digite o e-mail' ></Input>
          </div>

          <div className='filha'>
            <label> Telefone Celular 1: </label>
            <Input type="text" placeholder='(xx) xxxxx-xxxx'></Input>
            <label> Departamento: </label>
            <Input type="text" placeholder='Digite o Departamento' ></Input>
          </div>
        </div>
      

        <div className='botaocad'>
        <Button color="success"> Cadastrar </Button>
        </div>

      </div>
      )
  }

export default Funcionario;