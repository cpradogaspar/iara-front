import React, {Component} from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {onSignIn, isSignedIn, onSignOut} from '../auth';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Bookmarks extends Component {
  componentWillMount() {
    isSignedIn().then(res => {
      if (res === true) {
        onSignIn().then(() => this.props.navigation.navigate('SignedIn'));
      } else {
        onSignOut().then(() => this.props.navigation.navigate('SignedOut'));
      }
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export {Bookmarks};
