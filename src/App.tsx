import './estilo/estilo.css';
import { Route,Routes } from 'react-router-dom';

import Home from './paginas/home';
import Funcionario from './paginas/cadfuncionario';
import Patrimonio from './paginas/cadpatrimonio';
import Monitorar from './paginas/monitorar';
import NotFound from './paginas/notefound';
import Inicial from './paginas/login';
import CadastroUsuario from './paginas/cadusuario';


function App() {
  return (
    <div>   
      <div>
      <Routes>
        <Route path='/' element={<Inicial/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/home/usuario' element={<CadastroUsuario/>} />
        <Route path='/home/funcionario' element={<Funcionario/>} />
        <Route path='/home/patrimonio' element={<Patrimonio/>} />
        <Route path='/home/monitorar' element={<Monitorar/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
