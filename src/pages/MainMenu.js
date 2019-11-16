import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  Header,
  Text,
  Dimensions,
} from 'react-native';
import { withNavigation } from 'react-navigation';

//COlors = rgba(0, 215, 255, 1) 0%, rgba(0, 178, 212, 1) 49%, rgba(33, 124, 203, 1) 100%

import Icon from 'react-native-vector-icons/MaterialIcons';

/*import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
class MainMenu extends Component {
  render() {
    return (
      <ImageBackground style={{flex:1, alignItems: "center", width: '100%', height: '100%'}} source={require('../assets/water.jpg')}>
        <View style={{ marginTop: 20, height: Dimensions.get('window').height }}>
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <Text style={{fontWeight:'bold', fontSize:35, font:'Open Sans', color:'#fff'}}>Menu</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.button}
              title="Análises">
              <Text style={styles.buttonText}>Análises</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Relatorio')}
              style={styles.button}
              title="Relatórios">
              <Text style={styles.buttonText}>Relatórios</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
              style={styles.button}
              title="Perfil">
              <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Settings')}
              style={styles.button}
              title="Configurações">
              <Text style={styles.buttonText}>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={styles.button}
              title="Sair">
              <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 60, alignItems: 'center' }}>
            <Text style={{fontSize:18, font:'Open Sans', color:'#fff'}}>iara inc.</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'column',
    alignContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    marginTop: 50,
  },

  session2: {
    height: 50,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#000000',
    borderWidth: 1,
  },

  button: {
    height: 50,
    width: Dimensions.get('window').width - 50,
    borderRadius: 40,
    backgroundColor: '#00669E',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default withNavigation(MainMenu);
