import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import API from '../services/API';
import { LineChart } from 'react-native-chart-kit';
import { withNavigation } from 'react-navigation';

//import Icon from 'react-native-vector-icons/MaterialIcons';

/*import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/

class History extends Component {
  static navigationOptions = ({ navigation }) => {
    const {
      state: { params = {} },
    } = navigation;
    return {
      headerTitle: params.title || 'default title',
    };
  };

  componentDidMount(){
    let data = []
    API.get('/graph/historico/'+this.props.navigation.state.params.id).then(response =>{
      this.setState({ media: parseFloat(response.data.media).toFixed(1)})
      this.setState({ max: parseFloat(response.data.maximo)})
      this.setState({ min: parseFloat(response.data.minimo)})
      response.data.valores.forEach(valor =>{
        data.push(parseFloat(valor))
      })
      this.setState({valores:data})
      console.log(this.state.valores)
      // console.log(this.state.valores)
      //this.setState({ valores: JSON.parse(response.data.valores)})
    })
    .catch(err => console.log(err))
  }

  constructor(props){
    super(props)
    this.state = {
      media:0,
      max: 0,
      min:0,
      valores: [0,0,0,0,0]
    }
  }

  

  render() {
    let one = this.props.navigation.getParam('value', 'No data');
    let two = this.props.navigation.getParam('hor', 'error');
    var value = one.replace(/"/g, '');
    var num = parseInt(value);
    var hour = two.replace(/"/g, '');
    let valores = this.state.valores
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  height: 120,
                  width: '100%',
                  backgroundColor: '#005684',
                }}>
                <Text
                  style={{
                    fontSize: 45,
                    alignSelf: 'center',
                    textAlignVertical: 'center',
                    color: '#fff',
                  }}>
                  {value}
                </Text>
                <Text
                  style={{ fontSize: 20, alignSelf: 'center', color: '#fff' }}>
                  {hour}
                </Text>
              </View>
              <View style={{ width: '100%', backgroundColor: '#005684' }}>
                <LineChart
                  verticalLabelRotation={30}
                  data={{
                    datasets: [
                      {
                        data: valores.reverse(),
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width}
                  height={260}
                  //yAxisLabel={'°c'}
                  fromZero={true}
                  chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#004F7A',
                    backgroundGradientTo: '#005684',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '1',
                      stroke: '#fff',
                    },
                  }}
                  bezier
                />
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.dados}>
  <Text style={styles.textDados}>Média: {this.state.media} °c</Text>
              </View>
              <View style={styles.dados}>
  <Text style={styles.textDados}>Máximo atingido: {this.state.max}°c</Text>
              </View>
              <View style={styles.dados}>
  <Text style={styles.textDados}>Mínimo atingido: {this.state.min}ºc</Text>
              </View>
              
                
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    height: 80,
    marginLeft: '20%',
    marginTop: 20,
    width: '30%',
  },

  dados: {
    width: Dimensions.get('window').width - 25,
    height: 65,
    //borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 5,
    borderColor: '#00669E',
  },

  textDados: {
    fontSize: 25,
    alignSelf: 'center',
    textAlignVertical: 'center',
  },

  container2: {
    paddingTop: 10,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },

  button: {
    height: 60,
    width: 60,
    //alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#00669E',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default withNavigation(History);
