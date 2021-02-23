import {connect} from 'react-redux';
import TablaPersonas from './TablaPersonas';

function mapeoEstadoAProps(estado){
    return { personas:estado.personasMostradas};
}
function mapeoEventosADispatch(dispatch){
    return {
        borrarPersona: (dni)=>
            dispatch({type:"BORRAR",dni:dni})
    };
}

const TablaPersonasConectado = connect(
    mapeoEstadoAProps,mapeoEventosADispatch)(TablaPersonas);
export default TablaPersonasConectado;