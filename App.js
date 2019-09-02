import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, StyleSheet } from 'react-native'; // importando componentes React-Native

export default class PrimeiroProjeto extends Component {
  render() { // função de renderização para um componente component

    return (
      
      <View style={{flex:1, backgroundColor: 'black'}}> 
        <View style={{height:70, backgroundColor: 'blue'}}></View>
        <View style={{flex:1, backgroundColor: 'green'}}></View>
        <View style={{height:50, backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}