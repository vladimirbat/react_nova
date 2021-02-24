import React, { FC } from 'react';
import './App.css';
import { ComponenteConUseState } from './components/ComponenteConUseState';

export type AppProps ={
  titulo:string;
}

const App:FC<AppProps> = (props:AppProps) => {
  const {titulo} = props;
  return (
    <div className="container">
      <h1>{titulo}</h1>
      <div className="row">
        <div className="column column-50 column-offset-25">
          <ComponenteConUseState />
        </div>
      </div>
    </div>
  );
}

export default App;
