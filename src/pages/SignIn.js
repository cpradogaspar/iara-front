import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image, Alert} from 'react-native';
import {onSignIn, isSignedIn} from '../auth';
import {withNavigation} from 'react-navigation';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from '../services/API';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {user_name: '', password: ''};
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin() {
    await API.get('/usuario/login/'+this.state.user_name+'/'+this.state.password).then(response => {
      if (response.status == 200) {
        console.log(response.data)
        onSignIn(`${response.data}`).then(() => this.props.navigation.navigate('Menu'))
      } else {
        Alert.alert(
          'Erro!',
          'Verifique os campos e tente novamente',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
      }
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    isSignedIn().then(res => {
      if (res === true) {
        this.props.navigation.navigate('Menu');
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Image source={require('../assets/logo.png')} style={{alignSelf:"center",width:120,height:120,marginBottom:25}} />
          <View style={styles.section}>
            <Icon name="envelope-o" size={20} style={{marginLeft: 10}} />
            <TextInput
              style={styles.input}
              placeholder="E-mail do usuário"
              onChangeText={user_name => this.setState({user_name})}
            />
          </View>

          <View style={styles.section}>
            <Icon name="lock" size={20} style={{marginLeft: 10}} />
            <TextInput
              style={styles.input}
              placeholder="Senha de usuário"
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            title="Sign In"
            onPress={this.handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text
            style={{alignSelf: 'center', color: '#00669E', marginTop: 15}}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            Não tem conta? Registrar-se
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  button: {
    height: 50,
    borderRadius: 40,
    backgroundColor: '#00669E',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#fff',
    color: '#424242',
    width: 250,
  },
  section: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 5,
    borderRadius: 70,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default withNavigation(SignIn);
