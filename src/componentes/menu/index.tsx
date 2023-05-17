import '../../estilo/estilo.css';
import {Link} from 'react-router-dom';

type Props = {
    titInicio?: String;
    titUsuario?: String;
    titFuncionario?: String;
    titPatrimonio?: String;
    titmonitorar?: String;
    titsair?: String;
  }

function Botoes (parametro: Props){


  return(
    <div className='container_pai'>

      <div className='cont1'>
        <Link to="/">{parametro.titInicio}</Link>        
      </div>  
      <div className='cont2'>
      <Link to="/home/usuario">{parametro.titUsuario}</Link>        
      </div>
      <div className='cont3'>
      <Link to="/home/funcionario">{parametro.titFuncionario}</Link>         
      </div>
      <div className='cont4'>
      <Link to="/home/patrimonio">{parametro.titPatrimonio}</Link>         
      </div>
      <div className='cont5'>
      <Link to="/home/monitorar">{parametro.titmonitorar}</Link>         
      </div>
      <div className='cont5'>
      <Link to="*">{parametro.titsair}</Link>         
      </div>

    </div>

    )
}

export default Botoes;