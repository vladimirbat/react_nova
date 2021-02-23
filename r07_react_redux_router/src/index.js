import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import Principal from './Principal';
import {store} from './reductorPrincipal'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><Principal/></Provider>,
     document.getElementById('root'));
registerServiceWorker();
