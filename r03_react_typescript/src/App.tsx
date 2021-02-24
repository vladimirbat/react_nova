import React, { FC, Fragment } from 'react';
import { ComponenteConUseState } from './components/ComponenteConUseState';

export type AppProps ={
  titulo:string;
}

const App:FC<AppProps> = (props:AppProps) => {
  const {titulo} = props;
  return (
    <Fragment>
      <h1>{titulo}</h1>
      <div className="row">
        <div className="column column-50 column-offset-25">
          <ComponenteConUseState />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
