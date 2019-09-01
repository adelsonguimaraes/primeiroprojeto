import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, Image } from 'react-native'; // importando componentes React-Native

class Imagem extends Component {
  render() {

    let imagem = {
      uri: 'https://www.adelsonguimaraes.com.br/incubus/libs/img/icons/'+this.props.nome
    }

    return (
      <Image source={imagem} style={{width:parseInt(this.props.largura), height:parseInt(this.props.altura)}} />
    );
  }
}

export default class PrimeiroProjeto extends Component {
  render() { // função de renderização para um componente component

    return (
      
      <View> 
        {/*<View> componente que engloba outros componentes*/}
        <Text>Olá Mundo</Text>
        <Text style={{fontSize:25, color:"red", margin: 20}}>Olá Mundo</Text>

        <Imagem nome='icon-512x512.png' largura='250' altura='250' />

        {/* <Text> componente para mostrar um texto na tela */}
      </View>
    );
  }
}