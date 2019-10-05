import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
// console.tron.log('hello worlds');
// ROUTAS:
import Routes from './routes';

export default function App() {
  return (
    <>
      {/* estiliza a barra de status */}
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      {/* chama as rotas */}
      <Routes />
    </>
  );
}
