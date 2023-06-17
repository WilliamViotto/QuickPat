import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import { Input, Button } from 'reactstrap';

function Patrimonio () {
    
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
        <h1> Cadastro de Patrimônio </h1>
        <form action="">
        <div className='pai'>
          <div className='filha'>
            <label> Nome do Patrimônio: </label> 
            <Input type="text" placeholder='Digite o nome do item'></Input>
            <label> Modelo: </label>
            <Input type="text" placeholder='Digite o modelo' ></Input>  
            <label> Tipo: </label>
            <Input type="text" placeholder='Digite o tipo' ></Input>  
            <label> Grupo: </label>
            <Input type="text" placeholder='Digite o Grupo' ></Input> 
          </div>

          <div className='filha'>
            <label> Valor Real: </label>
            <Input type="text" placeholder='Digite o R$ da compra' ></Input>  

            <label> Descrição: </label> 
            <Input type="text" placeholder='Descreva do item'></Input>  
          </div>
        </div>
      

        <div className='botaocad'>
         <Button color="success"> Cadastrar </Button>
        </div>
        </form>
      </div>
      )
  }

export default Patrimonio;