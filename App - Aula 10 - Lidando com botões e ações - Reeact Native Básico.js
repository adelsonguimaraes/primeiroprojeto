import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, Button, Alert, TextInput, StyleSheet } from 'react-native'; // importando componentes React-Native

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {inputTexto:'', texto:''};
    this.apertouBotao = this.apertouBotao.bind(this);
  }

  apertouBotao() {
    let s = this.state;
    s.texto = (s.inputTexto === 'Adelson') ? "Você acertou!" : "Tente novamente!";
    this.setState(s);
  }

  render() { // função de renderização para um componente component

    return (
      <View style={{paddingTop:30}}> 
        <TextInput  style={styles.input} placeholder="Adivinhe meu nome?" onChangeText={(inputTexto) => this.setState({inputTexto})}/>
        <Button title="Aperte em mim" onPress={this.apertouBotao}/>
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth:1,
    borderColor:'#000000',
    margin:10,
    padding:10
  },
  texto: {
    fontSize:20,
    textAlign:'center'
  }
});