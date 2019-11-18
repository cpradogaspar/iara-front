import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {withNavigation} from 'react-navigation';

class Selecao extends Component {
  render() {
    return (
      <View style={{alignItems:'center', flexDirection:'column', justifyContent:'center', height:'90%'}}>
        <TouchableOpacity
        style={{margin:20}}
        onPress={() => this.props.navigation.navigate('MaxMin', {id: 5})}
          >
          <Text style={{fontSize:25}}>Condutividade</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{margin:20}}
        onPress={() => this.props.navigation.navigate('MaxMin', {id: 2})}
          >
          <Text style={{fontSize:25}}>Nível d'água</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{margin:20}}
        onPress={() => this.props.navigation.navigate('MaxMin', {id: 1})}
          >
          <Text style={{fontSize:25}}>Pot. Hidrog.</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{margin:20}}
        onPress={() => this.props.navigation.navigate('MaxMin', {id: 3})}
          >
          <Text style={{fontSize:25}}>Temperatura</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{margin:20}}
        onPress={() => this.props.navigation.navigate('MaxMin', {id: 4})}
          >
          <Text style={{fontSize:25}}>Turbidez</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Selecao);