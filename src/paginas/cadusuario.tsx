import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import { Input, Button } from 'reactstrap';


function Usuario () {
    
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
        <h1> Cadastro de Usuários </h1>
        <div id='pai1'>
          <div id='filha1'>
            <label> Nome: </label> 
            <Input type="text" placeholder='Digite o nome' />  
            <label> Sobrenome: </label> 
            <Input type="text" placeholder='Digite o sobrenome' />  
            <label> E-mail: </label> 
            <Input type="email" placeholder='Digite o e-mail' /> 
            <label> Confirmação E-mail: </label>
            <Input type="email" placeholder='Confirme o e-mail' /> 
          </div>

          <div id='filha1'>
            <label> Telefone Celular 1: </label>
            <Input type="text" placeholder='(xx) xxxxx-xxxx' /> 
            <label> Telefone Celular 2: </label>
            <Input type="text" placeholder='(xx) xxxxx-xxxx' />
          </div>
        </div>
      
        <div id='pai2'>
          <div id='filha2'>
              <label> Login: </label> 
              <Input type="text" placeholder='Digite o usuário' />
              <label> Senha: </label> 
              <Input type="password" placeholder='Digite a senha' />
          </div>
        </div> 

        <div className='botaocad'>
          <Button color="success"> Cadastrar </Button>
        </div>

      </div>
      )
  }

export default Usuario;