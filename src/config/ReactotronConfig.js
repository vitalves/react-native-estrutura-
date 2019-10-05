import Reactotron from 'reactotron-react-native';

// __DEV__: variavel global do RN. Retorna em quando estar em desenvolvimento
if (__DEV__) {
  // aqui dentro não executa em producao
  const tron = Reactotron.configure({ host: '192.168.0.2' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
