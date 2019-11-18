import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardView from 'react-native-cardview';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import API from '../services/API';
import { HeaderTitle } from 'react-navigation-stack';

let ultimaSincron = new Date().toTimeString().split(' ')[0]

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      temperatura:'',
      ph:'',
      turbidez:'',
      nivel:'',
      condutividade:'',
      ponto:0
    }
  }


  componentDidMount(){
    API.get('/analise_aux/ultima').then(response =>{
      console.log(response.data)
      response.data.forEach(prop =>{
        switch(prop.propriedade){
          case 1:
            this.setState({ ph: parseFloat(prop.valor).toFixed(1)})
            if(prop.resultado == 1) this.setState({ ponto: this.state.ponto + 20})
            break
          case 2:
            this.setState({ nivel: parseFloat(prop.valor).toFixed(1)})
            if(prop.resultado == 1) this.setState({ ponto: this.state.ponto + 20})
            break
          case 3:
            this.setState({ temperatura: parseFloat(prop.valor).toFixed(1)})
            if(prop.resultado == 1) this.setState({ ponto: this.state.ponto + 20})
            break
          case 4:
            this.setState({ turbidez: parseFloat(prop.valor).toFixed(1)})
            if(prop.resultado == 1) this.setState({ ponto: this.state.ponto + 20})
            break  
          case 5:
            this.setState({ condutividade: parseFloat(prop.valor).toFixed(1)})
            if(prop.resultado == 1) this.setState({ ponto: this.state.ponto + 20})
            break
          
        }
      }) 

    })
    .catch(err => console.log(err))
  }
  render() {
    const { temperatura, ph, turbidez, nivel, condutividade, ponto } = this.state
    return (
      <SafeAreaView>
        <ScrollView>

          <View style={styles.container}>
            <ImageBackground style={styles.containerImage} source={require('../assets/water.jpg')}>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 16,
                  padding: 10,
                  textAlign: 'center',
                  fontFamily: 'Open Sans',
                }}>
                Indaiatuba-SP
            </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  textAlign: 'center',
                  fontFamily: 'Open Sans',
                }}>
                Última sincronização {ultimaSincron}
            </Text>
              <Text
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontSize: 18,
                  marginTop: 22,
                  fontFamily: 'Open Sans',
                }}>
                Pontuação
            </Text>
              <Text
                style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontSize: 26,
                  fontWeight: 'bold',
                  fontFamily: 'Open Sans',
                }}>
                {ponto}
            </Text>
            </ImageBackground>
          </View>

          <View style={styles.container2}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('History',{value: temperatura, hor:ultimaSincron, title: 'Temperatura', id:3})}>
              <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={styles.cardViewStyle}>
                <View style={styles.section}>
                  <Icon
                    name="thermometer-half"
                    size={36}
                    style={styles.icons}
                  />
                  <Text style={styles.property}>
                    Temperatura(°c):
                </Text>
                  <Text style={styles.values}>
                    {temperatura}
                </Text>
                </View>
              </CardView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('History',{value: ph, hor:ultimaSincron, title: 'Potencial Hidrogeniônico', id:1})}>
              <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={styles.cardViewStyle}>
                <View
                  style={styles.section}>
                  <Icon
                    name="flask"
                    size={36}
                    style={styles.icons}
                  />
                  <Text style={styles.property}>
                    p. Hidrogeniônico(pH):
                </Text>
                  <Text style={styles.values}>
                    {ph}
                </Text>
                </View>
              </CardView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('History',{value: turbidez, hor:ultimaSincron, title: 'Turbidez', id:4})}>
              <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={styles.cardViewStyle}>
                <View style={styles.section}>
                  <Icon2
                    name="gradient"
                    size={36}
                    style={styles.icons}
                  />
                  <Text style={styles.property}>
                    Turbidez(NTU):
                </Text>
                  <Text style={styles.values}>
                    {turbidez}
                </Text>
                </View>
              </CardView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('History',{value: nivel, hor:ultimaSincron, title: 'Nível da água', id:2})}>
              <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={styles.cardViewStyle}>
                <View style={styles.section}>
                  <Icon2
                    name="beaker-outline"
                    size={36}
                    style={styles.icons}
                  />
                  <Text style={styles.property}>
                    Nível d'água(m):
                </Text>
                  <Text style={styles.values}>
                    {nivel}
                </Text>
                </View>
              </CardView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('History',{value: condutividade, hor:ultimaSincron, title: 'Condutividade', id:5})}>
              <CardView
                cardElevation={5}
                cardMaxElevation={5}
                cornerRadius={5}
                style={styles.cardViewStyle}>
                <View style={styles.section}>
                  <Icon3
                    name="flash"
                    size={36}
                    style={styles.icons}
                  />
                  <Text style={styles.property}>
                    Condutividade(μs/cm):
                </Text>
                  <Text style={styles.values}>
                    {condutividade}
                </Text>
                </View>
              </CardView>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    marginBottom: 15,
    width: Dimensions.get('window').width,
  },

  containerImage: {
    flex: 1,
    alignItems: "center",
    width: '100%',
    height: '100%',
  },

  container2: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EFEE',
  },

  relatorioText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  cardViewStyle: {
    width: Dimensions.get('window').width - 20,
    height: 80,
    marginBottom: 10,
  },

  cardView_InsideText: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    marginTop: 10,
  },

  icons: {
    justifyContent: 'flex-start',
    marginLeft: 15,
    marginTop: 15,
  },

  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  property: {
    fontSize: 20,
    marginTop: 15
  },

  values: {
    fontSize: 35,
    textAlign: 'right',
    marginRight: 10,
    marginTop: 15,
    fontWeight: 'bold',
  },
});

export default withNavigation(Home);