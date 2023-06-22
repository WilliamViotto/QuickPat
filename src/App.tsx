import './estilo/estilo.css';
import { Route,Routes } from 'react-router-dom';

import Home from './paginas/home';
import Usuario from './paginas/cadusuario';
import Funcionario from './paginas/cadfuncionario';
import Patrimonio from './paginas/cadpatrimonio';
import Monitorar from './paginas/monitorar';
import NotFound from './paginas/notefound';
import Inicial from './paginas/login';


function App() {
  return (
    <div>   
      <div>
      <Routes>
        <Route path='/' element={<Inicial/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/home/usuario' element={<Usuario/>} />
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
