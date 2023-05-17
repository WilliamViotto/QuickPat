import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';

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
        <div id='pai1'>
          <div id='filha1'>
            <label> Nome Completo: </label> 
            <input type="text" placeholder='Digite o nome do item' />  
            <label> ID: </label> 
            <input type="text" placeholder='Digite o ID do item' />  
            <label> Descrição: </label> 
            <input type="text" placeholder='Descreva do item' /> 
            <label> Modelo: </label>
            <input type="text" placeholder='Digite o modelo' /> 
            <label> Tipo: </label>
            <input type="text" placeholder='Digite o tipo' /> 
          </div>

          <div id='filha1'>
            <label> Valor Real: </label>
            <input type="text" placeholder='Digite o R$ da compra' /> 
            <label> Grupo: </label>
            <input type="text" placeholder='Digite o Grupo' />
          </div>
        </div>
      

        <div className='botaocad'>
          <input type="button" value='CADASTRAR' />
        </div>
      </div>
      )
  }

export default Patrimonio;