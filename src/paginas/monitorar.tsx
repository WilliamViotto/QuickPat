import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';

function Monitorar () {
    
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
        <h1> Monitoramento </h1>
      </div>
      )
  }

export default Monitorar;