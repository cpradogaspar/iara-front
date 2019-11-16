import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { onSignOut, USER_KEY } from '../auth';
import { withNavigation } from 'react-navigation';
import API from '../services/API';
import AsyncStorage from '@react-native-community/async-storage';

// import pic from '../../assets/images/pic.jpg';
class Profile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user_name: '',
      email: '',
    }

    this.componentWillMount = this.componentWillMount.bind(this)
  }

  async componentWillMount() {
    let user_name = await AsyncStorage.getItem(USER_KEY)
    await API.post('/getInfo', { user_name: user_name }).then(response => {
      this.setState({ user_name: response.data.user_name })
      this.setState({ email: response.data.email })
    })
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.profilePic}>
          {/* <Image source={pic} style={styles.image} /> */}
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.section}>
            <Text style={styles.descLabel}>Nome de usuário</Text>
            <Text style={styles.label}>{this.state.user_name}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.descLabel}>Email do usuário</Text>
            <Text style={styles.label}>{this.state.email}</Text>
          </View>
          <TouchableOpacity style={styles.buttonEdit}>
            <Text style={{ color: '#30BCED', fontSize: 15 }}>Editar conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonExit}
            onPress={() =>
              onSignOut().then(() =>
                this.props.navigation.navigate('SignedOut'),
              )
            }>
            <Text style={{ color: '#FC5130', fontSize: 15 }}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  profilePic: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 6,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#FD99B6',
  },
  buttonExit: {
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FC5130',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonEdit: {
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#30BCED',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  section: {
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  descLabel: { fontSize: 13, color: 'gray' },
  label: { fontSize: 17 },
});
