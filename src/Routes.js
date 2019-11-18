import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainMenu from './pages/MainMenu';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Relatorio from './pages/Relatorio';
import Analise from './pages/Analise';
import History from './pages/History';
import NovoRelatorio from './pages/NovoRelatorio';
import Selecao from './pages/Selecao';
import MaxMin from './pages/MaxMin';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Login: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    Menu: {
      screen: MainMenu,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Análises',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Perfil',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerTitle: 'Configurações',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    Relatorio: {
      screen: Relatorio,
      navigationOptions: {
        headerTitle: 'Relatórios',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    Analise: {
      screen: Analise,
      navigationOptions: {
        headerTitle: 'Propriedade',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        //headerTitle: 'Histórico',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    NovoRelatorio: {
      screen: NovoRelatorio,
      navigationOptions: {
        headerTitle: 'Novo Relatório',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    Selecao: {
      screen: Selecao,
      navigationOptions: {
        headerTitle: 'Selecione',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
    MaxMin: {
      screen: MaxMin,
      navigationOptions: {
        headerTitle: 'Máximo e Mínimo',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#00669E',
        },
      },
    },
  }),
);

export default Routes;