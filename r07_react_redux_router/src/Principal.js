import React,{ Component } from 'react';
import InsertarFormConectado from './InsertarFormConectado';
import TablaPersonasConectado from './TablaPersonasConectado';
import DetalleConectado from './DetalleConectado';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './Principal.css';

// -------------- CONTENEDOR ------------------
class Principal extends Component{
  render(){
        return  (
            <BrowserRouter>
                <div>
                    <nav>
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="/insertar">Insertar</Link>
                            <Link to="/listado">Listado</Link>
                        </div>
                    </nav>
                    {/* extact indica que la ruta debe ser tal cual*/}
                    <Route path="/" exact component={Home}/>
                    <Route path="/insertar" component={InsertarFormConectado}/>
                    <Route path="/listado" component={TablaPersonasConectado}/>
                    <Route path="/detalle/:dni" component={DetalleConectado}/>
                </div>
            </BrowserRouter>
        );
  }
 
}
class Home extends Component{
    render(){
        return (<h1>Página principal</h1>);
    }
}

export default Principal;
