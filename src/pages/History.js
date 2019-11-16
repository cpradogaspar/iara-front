import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import {BarChart} from 'react-native-chart-kit';

//import Icon from 'react-native-vector-icons/MaterialIcons';

/*import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View >
            <BarChart
              verticalLabelRotation={30}
              data={data}
              width={Dimensions.get('window').width}
              height={260}
              //yAxisLabel={'°c'}
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#0A78BB',
                backgroundGradientTo: '#00669E',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#ffa726',
                }
              }}
            />
          </View>
          <View style={styles.container2}>
            <View style={styles.dados}>
              <Text style={styles.textDados}>Média: 19°c</Text>
            </View>
            <View style={styles.dados}>
              <Text style={styles.textDados}>Máximo atingido: 29.7°c</Text>
            </View>
            <View style={styles.dados}>
              <Text style={styles.textDados}>Mínimo atingido: 7.3°c</Text>
            </View>
            <View style={styles.dados}>
              <Text style={styles.textDados}>Máximo permitido: 40°c</Text>
            </View>
            <View style={styles.dados}>
              <Text style={styles.textDados}>Mínimo permitido: 0°c</Text>
            </View>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.button} title="day">
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="week">
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} title="moonth">
              <Text style={styles.buttonText}>30</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
  datasets: [
    {
      data: [7.3, 20.7, 29.7, 17, 23],
    },
  ],
};

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    height: 80,
    marginLeft:'20%',
    marginTop: 20,
    width: '30%',
  },

  dados: {
    width: Dimensions.get('window').width - 25,
    height: 65,
    borderWidth: 0.8,
    marginTop: 5,
    borderColor: '#000000',
  },

  textDados: {
    fontSize: 25,
    alignSelf: 'center',
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

export default App;