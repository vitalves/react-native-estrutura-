import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

// createAppContainer precisa vir por volta de todas as rotas
const Routes = createAppContainer(
  // createStackNavigator rotas por pilha (com opcao p voltar)
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerLayoutPreset: 'center', // centraliza o conteudo do header
      headerBackTitleVisible: 'false', // remove a palavra 'Voltar' '>'
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      },
    },
  ),
);

export default Routes;
