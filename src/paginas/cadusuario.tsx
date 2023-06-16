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
        <div className='pai'>
          <div className='filha'>
            <label> Nome: </label> 
            <Input type="text" placeholder='Digite o nome'></Input>
            <label> Sobrenome: </label>
            <Input type="text" placeholder='Digite o sobrenome'></Input>
            <label> E-mail: </label> 
            <Input type="email" placeholder='Digite o e-mail'></Input>
            <label> Confirmação E-mail: </label>
            <Input type="email" placeholder='Confirme o e-mail'></Input>
          </div>

          <div className='filha'>
            <label> Telefone Celular 1: </label>
            <Input type="text" placeholder='(xx) xxxxx-xxxx'></Input>
            <label> Telefone Celular 2: </label>
            <Input type="text" placeholder='(xx) xxxxx-xxxx'></Input>
            <label> Login: </label> 
            <Input type="text" placeholder='Digite o usuário'></Input>
            <label> Senha: </label> 
            <Input type="password" placeholder='Digite a senha'></Input>
          </div>
        </div>
      


        <div className='botaocad'>
          <Button color="success"> Cadastrar </Button>
        </div>

      </div>
      )
  }

export default Usuario;