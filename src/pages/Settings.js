import React, { Component } from 'react';
import { SafeAreaView,View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class Settings extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View style={styles.options}>
          <Text>Settings</Text>
        </View>
        <View style={styles.options}>
          <Text>Settings</Text>
        </View>
        <View style={styles.options}>
          <Text>Settings</Text>
        </View>
        <View style={styles.options}>
          <Text>Settings</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  options: {
    borderWidth: 0.8,
    margin: 10,
    height: 50,
    width: '95%',
  }
}

export default withNavigation(Settings);

