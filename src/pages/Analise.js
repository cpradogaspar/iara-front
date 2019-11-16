/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Header,
  Text,
  Dimensions,
} from 'react-native';

import { LineChart } from 'react-native-chart-kit';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

/*import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
*/
class Analise extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <View style={{height:150, width:'94%', margin:5, backgroundColor:'#00669E',marginBottom:20}}>
          <Text style={{fontSize:45, alignSelf:"center", textAlignVertical:"center", color:'#fff'}}>16 °c</Text>
          <Text style={{fontSize:20, alignSelf:"center", color:'#fff'}}>12:37</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'column', alignItems:'center'}}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{alignItems:'center', borderWidth: 0.7, width: '45%', height: 50, margin: 5 }}>
                <Text style={{fontWeight:'bold'}}>40</Text>
                <Text>Valor máximo</Text>
              </View>
              <View style={{alignItems:'center', borderWidth: 0.7, width: '45%', height: 50, margin: 5 }}>
                <Text style={{fontWeight:'bold'}}>0</Text>
                <Text>Valor Mínimo</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ borderWidth: 0.7, width: '45%', height: 50, margin: 5 }}></View>
              <View style={{ borderWidth: 0.7, width: '45%', height: 50, margin: 5 }}></View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ borderWidth: 0.7, width: '45%', height: 50, margin: 5 }}></View>
              <View style={{ borderWidth: 0.7, width: '45%', height: 50, margin: 5 }}></View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('History')} style={styles.button} title="history">
              <Text style={styles.buttonText}>H</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  session1: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 100,
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
    height: 60,
    width: 60,
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#00669E',
    alignContent: 'center',
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default withNavigation(Analise);
