import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import { Usuario } from '../componentes/types/usuario';

function Monitorar() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const carregarUsuarios = () => {

    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUsuarios(json);
      })
  }

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
      <h1> Monitoramento </h1>

      <button onClick={carregarUsuarios}> Lista de Funcionários </button>
      <br />
      <div className='telamonitorar'>

      <div>
        {usuarios.map((item, index) =>
          <div key={index}>
            <hr />
            ID: {item.id} / User ID: {item.userId} / Título: {item.title}
            <hr />
          </div>
        )}
      </div>
      </div>


    </div>
  )
}

export default Monitorar;