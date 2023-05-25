import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';



function Home () {
    
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
        <h1>Home da página</h1>   
      </div>
      )
  }

export default Home;