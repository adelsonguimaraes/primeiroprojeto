import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, Image } from 'react-native'; // importando componentes React-Native

export default class PrimeiroProjeto extends Component {
  render() { // função de renderização para um componente component

    // criando variável com uri da imagem a ser inserida
    let imagem = {uri: 'https://www.adelsonguimaraes.com.br/incubus/libs/img/icons/icon-512x512.png'};

    return (
      
      <View> 
        {/*<View> componente que engloba outros componentes*/}
        <Text>Olá Mundo</Text>
        <Text style={{fontSize:25, color:"red", margin: 20}}>Olá Mundo</Text>

        <Image source={imagem} style={{width:300, height:300}}/>
        {/* <Text> componente para mostrar um texto na tela */}
      </View>
    );
  }
}