import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import API from '../services/API';
import AsyncStorage from '@react-native-community/async-storage';

class MaxMin extends Component {
    state = {
        max: '',
        min: ''
    }

    alterarMaxMin(id) {
        AsyncStorage.getItem('auth-demo-key').then(usuarioID => {
            console.log(usuarioID)
            API.put('/usuario/config', { config: { usuarioID: `${usuarioID}`, propriedadeID: id, valor_maximo: this.state.max, valor_minimo: this.state.min } })
                .then(response => {
                    this.props.navigation.navigate('Settings');
                })
        })
    }

    render() {
        let one = this.props.navigation.getParam('id', '0');
        var id = parseInt(one);
        console.log(id);
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', height: '80%' }}>
                <View style={{ flexDirection: "row",margin:5}}>
                    <Text style={{ fontSize:25, padding: 5 }}>Máximo</Text>
                    <View style={styles.section}><TextInput
                        onChangeText={max => this.setState({ max })}
                        placeholder="ex: 100" style={{ padding: 0 }} />
                </View>
                </View>
                <View style={{ flexDirection: "row",margin:5 }}>
                <Text style={{ fontSize:25, padding: 5,  }}>Mínimo</Text>
                <View style={styles.section}><TextInput
                        onChangeText={min => this.setState({ min })}
                        placeholder="ex: 10" style={{ padding: 0 }} />
                </View>
                </View>
                <TouchableOpacity
                    onPress={() => this.alterarMaxMin(id)}
                    style={styles.button}
                    title="enviar">
                    <Text style={styles.buttonText}>Alterar</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    button: {
        width: '60%',
        height: 50,
        borderRadius: 40,
        backgroundColor: '#00669E',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        margin: 30,
    },
    section: {
        height: 45,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 5,
        borderRadius: 70,
    },
});

export default withNavigation(MaxMin)