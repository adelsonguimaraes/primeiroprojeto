import React, { Component } from 'react'; // importando biblioteca React
import { View, Text } from 'react-native'; // importando componentes React-Native

export default class PrimeiroProjeto extends Component {
  render() { // função de renderização para um componente component
    return (
      
      <View> 
        {/*<View> componente que engloba outros componentes*/}
        <Text>Olá Mundo</Text>
        {/* <Text> componente para mostrar um texto na tela */}
      </View>
    );
  }
}