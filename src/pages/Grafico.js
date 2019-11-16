
import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';

import {
  LineChart,
} from "react-native-chart-kit";


class Grafico extends Component {
  render(){
    return (
    
      <SafeAreaView style={{alignContent:'center', alignItems:'center', padding:10, backgroundColor:'#E6EFEE'}}>
        <ScrollView>
          <View>
            <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold'}}>Análises de pH</Text>
            <LineChart
              data={{
                labels: ["1ºBim", "2ºBim", "3ºBim", "4ºBim"],
                datasets: [
                  {
                    data: [
                      Math.random() * (14 - 3) + 3,
                      Math.random() * (14 - 3) + 3,
                      Math.random() * (14 - 3) + 3,
                      Math.random() * (14 - 3) + 3
                    ]
                  }
                ]
              }}

              width={Dimensions.get("window").width - 20} // from react-native
              height={220}
              withDots={true} //indica se ira ou não ter bolinhas (sem isso, automaticamente terá)
              withInnerLines={true}
              verticalLabelRotation="{30}"
              fromZero={true}
              //yAxisLabel={"$"} //insere uma unidade (string) nos valores verticais
              chartConfig={{
                barPercentage: 4.8,
                strokeWidth: 2, //largura da linha
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#0b0b3b", //cor de fundo do grafico
                backgroundGradientTo: "#0b0b3b", //tbm modifica a cor de fundo
                decimalPlaces: 0, // casas decimais dos valores verticais
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //cor das linhas e pontos
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //cor dos valores laterais(labels)
                style: {
                  borderRadius: 0
                },
                propsForDots: {
                  r: "3", //raio do ponto
                  strokeWidth: "30", //sombra do ponto
                  stroke: "#ffffff" //cor da sombra
                  
                }
              }}

              style={{
                marginVertical: 8, //margem a partir de cima
                borderRadius: 16 //curvatura da borda
              }}
            bezier //indica se as linhas serao onduladas
            
            />
          </View>

          <View>
            <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold'}}>Análises de Turbidez (NTU)</Text>
            <LineChart
              data={{
                labels: ["1ºBim", "2ºBim", "3ºBim", "4ºBim", "5ºBim"],
                datasets: [
                  {
                    data: [
                      Math.random() * (200 - 50) + 50,
                      Math.random() * (200 - 50) + 50,
                      Math.random() * (200 - 50) + 50,
                      Math.random() * (200 - 50) + 50,
                      Math.random() * (200 - 50) + 50
                    ]
                  }
                ]
              }}

              width={Dimensions.get("window").width - 20} // from react-native
              height={220}
              withDots={true} //indica se ira ou não ter bolinhas (sem isso, automaticamente terá)
              withInnerLines={true}
              verticalLabelRotation="{30}"
              fromZero={true}
              //yAxisLabel={"$"} //insere uma unidade (string) nos valores verticais
              chartConfig={{
                barPercentage: 4.8,
                strokeWidth: 2, //largura da linha
                backgroundColor: "#0b0b3b",
                backgroundGradientFrom: "#020378", //cor de fundo do grafico
                backgroundGradientTo: "#5c4eee", //tbm modifica a cor de fundo
                decimalPlaces: 0, // casas decimais dos valores verticais
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //cor das linhas e pontos
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //cor dos valores laterais(labels)
                style: {

                  borderRadius: 0
                },
                propsForDots: {
                  r: "3", //raio do ponto
                  strokeWidth: "30", //sombra do ponto
                  stroke: "#ffffff" //cor da sombra
                  
                }
              }}

              style={{
                marginVertical: 8, //margem a partir de cima
                borderRadius: 16 //curvatura da borda
              }}
            bezier //indica se as linhas serao onduladas
            
            />
          </View>

          <View>
            <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold'}}>Análises de Condutividade (μS/cm)</Text>
            <LineChart
              data={{
                labels: ["1ºBim", "2ºBim", "3ºBim", "4ºBim"],
                datasets: [
                  {
                    data: [
                      Math.random() * (200 - 50) + 50,
                      Math.random() * (200 - 50) + 50,
                      Math.random() * (200 - 50) + 50,
                      Math.random() * (200 - 50) + 50
                    ]
                  }
                ]
              }}

              width={Dimensions.get("window").width - 20} // from react-native
              height={220}
              withDots={true} //indica se ira ou não ter bolinhas (sem isso, automaticamente terá)
              withInnerLines={true}
              verticalLabelRotation="{30}"
              //fromZero={true}
              //yAxisLabel={"$"} //insere uma unidade (string) nos valores verticais
              chartConfig={{
                barPercentage: 4.8,
                strokeWidth: 2, //largura da linha
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#5c4eee", //cor de fundo do grafico
                backgroundGradientTo: "#A5C0E3", //tbm modifica a cor de fundo
                decimalPlaces: 0, // casas decimais dos valores verticais
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //cor das linhas e pontos
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //cor dos valores laterais(labels)
                style: {

                  borderRadius: 0
                },
                propsForDots: {
                  r: "3", //raio do ponto
                  strokeWidth: "30", //sombra do ponto
                  stroke: "#ffffff" //cor da sombra
                  
                }
              }}

              style={{
                marginVertical: 8, //margem a partir de cima
                borderRadius: 16 //curvatura da borda
              }}
            bezier //indica se as linhas serao onduladas
            
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      
  );
  }
  
};



export {Grafico};