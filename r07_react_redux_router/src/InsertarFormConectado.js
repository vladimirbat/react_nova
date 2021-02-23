import {connect} from 'react-redux';
import InsertarForm from './InsertarForm';

function mapeoEstadoAProps(estado){
    return {};
}
function mapeoEventosADispatch(dispatch){
    return {
        pesonaInsertada: (nuevo) => 
            dispatch({type:"INSERTAR",nuevo:nuevo})
    };
}

const InsertarFormConectado = connect(
    mapeoEstadoAProps,mapeoEventosADispatch)(InsertarForm);

export default InsertarFormConectado;