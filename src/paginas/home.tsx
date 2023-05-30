import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';

function Home() {

  return (
    <div>
      <Cabecalho
        cabTexto1={"Início"}
        cabTexto2={"Cad. Usuário"}
        cabTexto3={"Cad. Funcionário"}
        cabTexto4={"Cad. Patrimônio"}
        cabTexto5={"Monitorar"}
        cabTexto6={"Sair"}
      />

      <div className='home1'>

        <div className='cadPatrimonio'>
          <h3>Cadastro de Patrimônio</h3>
          <br />
          <p>Aqui serão cadastradas as  filiais da sua empresa</p>
          <br />
          <button className='btnHome'><strong>Clique aqui</strong>
          </button>
        </div>

        <div className='cadUsuario'>
          <h3>Cadastro de Usuário</h3>
          <br />
          <p>Aqui serão cadastradas as filiais da sua empresa</p>
          <br />
          <button className='btnHome'><strong>Clique aqui</strong></button>
        </div>

        <div className='cadFiliais'>
          <h3>Cadastro de Filiais</h3>
          <br />
          <p>Aqui serão cadastradas as <br /> filiais da sua empresa</p>
          <br />
          <button className='btnHome'><strong>Clique aqui</strong></button>
        </div>

        <div className='cadFuncionarios'>
          <h3>Cadastro de Funcionários</h3>
          <br />
          <p>Aqui serão cadastradas as filiais da sua empresa.</p>
          <br />
          <button className='btnHome'><strong>Clique aqui</strong></button>
        </div>

      </div>

      <div className='home2'>

        <div className='monitorar'>
          <h3>Monitorar</h3>
          <br />
          <p>exemplo exemplo exemplo exemplo</p>
          <br />
          <button className='btnHome'><strong>Clique aqui</strong></button>
        </div>

      </div>

    </div>
  )
}

export default Home;