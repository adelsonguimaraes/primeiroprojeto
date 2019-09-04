import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, StyleSheet } from 'react-native'; // importando componentes React-Native

export default class PrimeiroProjeto extends Component {
  render() { // função de renderização para um componente component

    return (
      
      <View style={{flex:1, flexDirection: "row", justifyContent: "center", alignItems: "center"}}> 
        <View style={{width:200, height:100, backgroundColor: 'blue'}}></View>
      </View>
    );
  }
}