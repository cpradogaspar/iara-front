import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
import API from '../services/API';
import AsyncStorage from '@react-native-community/async-storage';

class NovoRelatorio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            condutividade: '',
            nivel: '',
            ph: '',
            temperatura: '',
            turbidez: ''

        }

        this.novaAnalise = this.novaAnalise.bind(this);
    }

    novaAnalise() {
        //console.log(this.state)
        AsyncStorage.getItem('auth-demo-key').then(id => {
            API.post('/analise/registrar/' + id).then(response => {
                API.post('/analise_aux/registrar/' + id, { analiseID: response.data, propriedadeID: 1, valor: this.state.ph })
                    .then(() => {
                        API.post('/analise_aux/registrar/' + id, { analiseID: response.data, propriedadeID: 2, valor: this.state.nivel })
                            .then(() => {
                                API.post('/analise_aux/registrar/' + id, { analiseID: response.data, propriedadeID: 3, valor: this.state.temperatura })
                                    .then(() => {
                                        API.post('/analise_aux/registrar/' + id, { analiseID: response.data, propriedadeID: 4, valor: this.state.turbidez })
                                            .then(() => {
                                                API.post('/analise_aux/registrar/' + id, { analiseID: response.data, propriedadeID: 5, valor: this.state.condutividade })
                                                    .then(response => {
                                                        Alert.alert('Relatório enviado com sucesso!');
                                                    })
                                                    .then(response => {
                                                        this.props.navigation.navigate('Relatorio');
                                                    })
                                            })
                                    })
                            })
                    })
            })
        })

    }
    render() {
        return (
            <>
            <View style={{ height:300, alignItems: 'center', paddingTop: 50 }}>
                <View style={styles.container}>
                    <View style={styles.bloco1}>
                        <Text style={styles.texts}>Condutividade</Text>
                    </View>
                    <View style={styles.section}>
                        <TextInput
                            onChangeText={condutividade => this.setState({ condutividade })}
                            placeholder="ex: 100" style={{ padding: 0, width: '100%' }} />
                    </View>
                    <View style={styles.bloco3}>
                        <TouchableOpacity style={styles.touchables}>
                            <Icon name="signal" style={{ color: '#fff' }} />
                        </TouchableOpacity></View>
                </View>
                <View style={styles.container}>
                    <View style={styles.bloco1}>
                        <Text style={styles.texts}>Nível d'água</Text>
                    </View>
                    <View style={styles.section}>
                        <TextInput
                            onChangeText={nivel => this.setState({ nivel })}
                            placeholder="ex: 3.5" style={{ padding: 0, width: '100%' }} />
                    </View>
                    <View style={styles.bloco3}>
                        <TouchableOpacity style={styles.touchables}>
                            <Icon name="signal" style={{ color: '#fff' }} />
                        </TouchableOpacity></View>
                </View>
                <View style={styles.container}>
                    <View style={styles.bloco1}>
                        <Text style={styles.texts}>pH</Text>
                    </View>
                    <View style={styles.section}>
                        <TextInput
                            onChangeText={ph => this.setState({ ph })}
                            placeholder="ex: 7.2" style={{ padding: 0, width: '100%' }} />
                    </View>
                    <View style={styles.bloco3}>
                        <TouchableOpacity style={styles.touchables}>
                            <Icon name="signal" style={{ color: '#fff' }} />
                        </TouchableOpacity></View>
                </View>
                <View style={styles.container}>
                    <View style={styles.bloco1}>
                        <Text style={styles.texts}>Temperatura</Text>
                    </View>
                    <View style={styles.section}>
                        <TextInput
                            onChangeText={temperatura => this.setState({ temperatura })}
                            placeholder="ex: 20.0" style={{ padding: 0, width: '100%' }} />
                    </View>
                    <View style={styles.bloco3}>
                        <TouchableOpacity style={styles.touchables}>
                            <Icon name="signal" style={{ color: '#fff' }} />
                        </TouchableOpacity></View>
                </View>
                <View style={styles.container}>
                    <View style={styles.bloco1}>
                        <Text style={styles.texts}>Turbidez</Text>
                    </View>
                    <View style={styles.section}>
                        <TextInput
                            onChangeText={turbidez => this.setState({ turbidez })}
                            placeholder="ex: 56" style={{ padding: 0, width: '70%' }} />
                    </View>
                    <View style={styles.bloco3}>
                        <TouchableOpacity style={styles.touchables}>
                            <Icon name="signal" style={{ color: '#fff' }} />
                        </TouchableOpacity></View>
                </View>
            </View>
            <View style={{paddingTop:40}}>
            <TouchableOpacity
                onPress={this.novaAnalise}
                style={styles.button}
                title="enviar">
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
        </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 3,
        justifyContent: 'space-between',
    },

    bloco1: {
        justifyContent: 'center',
        alignContent: 'center',
        width:'40%',
        paddingLeft:10,
    },

    bloco3: {
        flex: 3,
        paddingTop: 10
    },

    texts: {
        fontSize: 18,
        padding: 5,
        flex: 1,
    },

    touchables: {
        height: 20,
        width: 20,
        borderRadius: 60,
        backgroundColor: '#00669E',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        width: '60%',
        height: 50,
        borderRadius: 40,
        backgroundColor: '#00669E',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center',
        elevation: 5,
        margin: 5,
    },

    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    input: {
        backgroundColor: '#fff',
        color: '#424242',
        width: 200,
    },
    section: {
        height: 35,
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

export default withNavigation(NovoRelatorio);