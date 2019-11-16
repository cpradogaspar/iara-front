import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class RelatorioForm extends Component {
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                padding: 20
            }}>
                <View style={styles.section}>
                    <Text style={styles.descLabel}>Usuário do relatório</Text>
                    <Text style={styles.label}>Admin</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    section: {
        height: 50,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    descLabel: { fontSize: 13, color: 'gray' },
    label: { fontSize: 17 },
})


export { RelatorioForm };