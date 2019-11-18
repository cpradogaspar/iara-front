import React, { Component } from 'react';
import { SafeAreaView,View, Text,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class Settings extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Selecao')}>
        <View style={styles.options}>
          <Text style={{fontSize:19}}>Alterar valor máximo e mínimo</Text>
        </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = {
  options: {
    borderBottomWidth: 0.8,
    marginTop: 30,
    height: 60,
    justifyContent: 'center',
    width: '75%',
    alignItems:'center',
  }
}

export default withNavigation(Settings);

