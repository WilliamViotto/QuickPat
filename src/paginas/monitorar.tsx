import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import { useState } from 'react';
import { Usuario } from '../componentes/types/usuario';
import { Input, Table } from 'reactstrap';

function Monitorar() {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const [loading, setLoading] = useState(false);


  const carregarUsuarios = async () => {

    setLoading(true);
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/")
      let json = await response.json();


      setLoading(false);
      setUsuarios(json);
    } catch (e) {
      alert('Falha ao carregar os históricos de movimentação')
      setLoading(false);
      console.error(e);
    }
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
      <div className='divcima'>

        <div className='divcima1'>
          <button onClick={carregarUsuarios}> Lista de Funcionários </button>
          <br />
        </div>

        <div className='divcima1'>
          <label>ID do Patrimônio: </label>
          <Input type='number'></Input>
          <label>ID do Funcionário: </label>
          <Input type='number'></Input>
        </div>
        <br />
      </div>


      <div>
        <Table
          hover
          responsive
          size=""
        >
          <thead>
            <tr className="table-light">
              <th>
                ID
              </th>
              <th>
                NOME
              </th>
              <th>
                ID PATRIMÔNIO
              </th>
              <th>
                PATRIMÔNIO
              </th>
              <th>
                OBSERVAÇÃO
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-light">
              <th scope="row">
                1
              </th>
              <td>
                Mark
              </td>
              <td>
                Otto
              </td>
              <td>
                @mdo
              </td>
              <td>
                @mdo
              </td>
            </tr>
            <tr className="table-light">
              <th scope="row">
                2
              </th>
              <td>
                Jacob
              </td>
              <td>
                Thornton
              </td>
              <td>
                @fat
              </td>
              <td>
                @fat
              </td>
            </tr>
            <tr className="table-light">
              <th scope="row">
                3
              </th>
              <td>
                Larry
              </td>
              <td>
                the Bird
              </td>
              <td>
                @twitter
              </td>
              <td>
                @twitter
              </td>
            </tr>
          </tbody>
        </Table>
      </div>



      <div className='telamonitorar'>

        {loading &&
          <div>Carregando conteúdo ...</div>
        }
        <div>
          {usuarios.map((item, index) =>
            <div key={index}>
              <tbody>
                <tr className="table-light">
                  <th scope="row">
                    {item.id} -
                  </th>
                  <td>
                    {item.userId} -
                  </td>
                  <td>
                    {item.title} -
                  </td>
                </tr>
              </tbody>
            </div>
          )}
        </div>
      </div>



    </div>
  )
}

export default Monitorar;