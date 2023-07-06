import { Table } from 'reactstrap';
import { Usuario } from '../componentes/types/usuario'

type Props = {
    data: Usuario
}


function UsuarioItem({ data }: Props) {
    return (
        <div>
           <Table
                hover
                responsive
                size="">
                <tbody>
                  <tr className="table-light">
                    <th scope="row">
                      {data.id}
                    </th>
                    <td>
                      {data.title}
                    </td>
                    <td>
                      {data.id}
                    </td>
                    <td>
                      {data.title}
                    </td>
                    <td>
                      {data.title}
                    </td>
                  </tr>
                </tbody>
              </Table>
        </div>
    )
}

export default UsuarioItem;