import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import API from '../services/API'
import { withNavigation } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';

class SignUp extends Component {


  constructor(props) {
    super(props);
    this.state = { email: '', user_name: '', city:'', country:'', password: '' };
    this.handleRegister = this.handleRegister.bind(this)
  }
  state = { email: '', user_name: '', city:'', country:'', password: '' };

  async handleRegister() {
    await API.post('/registrar', { user_name: this.state.user_name, password: this.state.password, email: this.state.email }).then(response => {

      if (response.data.code == 200) {
        Alert.alert(
          'Sucesso!',
          'Cadastro realizado com êxito!',
          [
            { text: 'OK', onPress: () => this.props.navigation.navigate('SignIn') },
          ],
        );

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

  }


  render() {

    return (
      <View style={styles.container} behavior="padding">
        <View style={styles.form}>
          <View style={styles.section}>
            <Icon name="email" size={20} style={{ marginLeft: 10 }} />
            <TextInput
              style={styles.input}
              placeholder="E-mail do usuário"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            ></TextInput>
          </View>
          <View style={styles.section}>
            <Icon name="insert-emoticon" size={20} style={{ marginLeft: 10 }} />
            <TextInput
              style={styles.input}
              placeholder="Nome de usuário"
              value={this.state.user_name}
              onChangeText={user_name => this.setState({ user_name })}
            ></TextInput>
          </View>

          <View style={styles.section}>
            <Icon name="location-city" size={20} style={{ marginLeft: 10 }} />
            <TextInput
              style={styles.input}
              placeholder="Cidade-UF"
              value={this.state.user_name}
              onChangeText={user_name => this.setState({ user_name })}
            ></TextInput>
          </View>

          <View style={styles.section}>
            <Icon name="location-on" size={20} style={{ marginLeft: 10 }} />
            <TextInput
              style={styles.input}
              placeholder="País"
              value={this.state.user_name}
              onChangeText={user_name => this.setState({ user_name })}
            ></TextInput>
          </View>

          <View style={styles.section}>
            <Icon name="lock" size={20} style={{ marginLeft: 10 }} />
            <TextInput
              style={styles.input}
              placeholder="Senha de usuário"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            ></TextInput>
          </View>

          <View style={styles.section}>
            <Icon name="lock" size={20} style={{ marginLeft: 10 }} />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha de usuário"
              secureTextEntry={true}></TextInput>
          </View>
          <TouchableOpacity
            style={styles.button}
            title="Sign In"
            onPress={this.handleRegister}>
            <Text style={styles.buttonText}>Registrar-se</Text>
          </TouchableOpacity>
          <Text
            style={{ alignSelf: 'center', color: '#00669E',marginTop:10 }}
            onPress={() => this.props.navigation.navigate('Login')}>
            Já tem uma conta? Entrar
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
    padding: 20,
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

export default withNavigation(SignUp);
