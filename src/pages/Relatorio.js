import React, {Component} from 'react';
import {TouchableOpacity,Text, SafeAreaView, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {onSignIn, isSignedIn, onSignOut} from '../auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigation} from 'react-navigation';

class Relatorio extends Component {
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
        <View>
            <TouchableOpacity
            style={styles.relatorioButton}
            title="Sign In"
            onPress={() => this.props.navigation.navigate('NovoRelatorio')}>
            <Text style={styles.relatorioText}>Fazer relatório +</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  relatorioButton: {
    height: 50,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#00669E',
    flexDirection: 'row',
  },
  relatorioText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default withNavigation(Relatorio);