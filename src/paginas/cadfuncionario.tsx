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
        <div id='pai1'>
          <div id='filha1'>
            <label> Nome Completo: </label> 
            <Input type="text" placeholder='Digite o nome completo' />
            <label> Cargo: </label> 
            <Input type="text" placeholder='Digite o cargo' />  
            <label> E-mail: </label> 
            <Input type="email" placeholder='Digite o e-mail' /> 
            <label> Confirmação E-mail: </label>
            <Input type="email" placeholder='Digite o e-mail' /> 
          </div>

          <div id='filha1'>
            <label> Telefone Celular 1: </label>
            <Input type="text" placeholder='(xx) xxxxx-xxxx' /> 
            <label> Departamento: </label>
            <Input type="text" placeholder='Digite o Departamento' />
          </div>
        </div>
      

        <div className='botaocad'>
        <Button color="success"> Cadastrar </Button>
        </div>

      </div>
      )
  }

export default Funcionario;