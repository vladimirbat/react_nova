import {connect} from 'react-redux';
import Detalle from './Detalle';

function mapeoEstadoAProps(estado){
    return { persona:estado.personaDetalle};
}
function mapeoEventosADispatch(dispatch){
    return {
        detallePersona: (dni)=>
            dispatch({type:"DETALLE",dni:dni})
    };
}

const DetalleConectado = connect(
    mapeoEstadoAProps,mapeoEventosADispatch)(Detalle);
export default DetalleConectado;