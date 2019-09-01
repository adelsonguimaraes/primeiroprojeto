import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, StyleSheet } from 'react-native'; // importando componentes React-Native

export default class PrimeiroProjeto extends Component {
  render() { // função de renderização para um componente component

    return (
      
      <View style={styles.padrao}> 
        <Text style={styles.azulGrande}>Esse é o texto 1</Text>
        <Text style={styles.vermelho}>Esse é o texto 2</Text>
        <Text style={[styles.azulGrande, styles.vermelho]}>Esse é o texto 3</Text>
        <Text>Esse é o texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  padrao: {
    paddingTop: 20
  },
  azulGrande: {
    color: '#0000FF',
    fontSize: 30,
    textAlign: 'center'
  },
  vermelho: {
    color: '#FF0000',
    fontSize: 15
  }
});