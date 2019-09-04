import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, TextInput, StyleSheet } from 'react-native'; // importando componentes React-Native

export default class PrimeiroProjeto extends Component {

  constructor (props) {
    super(props);
    this.state = {texto:''};
    this.mudarTexto = this.mudarTexto.bind(this);
  }

  mudarTexto(t) {
    let s = this.state; // copiando o state para "s"
    s.texto = (t.length) ? 'Olá, ' +t : ''; // se o texto tiver tamanho maio que 0 || ''
    this.setState(s); // setando o state novamente
  }

  render() { // função de renderização para um componente component

    return (
      <View style={{paddingTop:30}}> 
        <TextInput style={styles.input} placeholder="Qual seu nome?" onChangeText={this.mudarTexto}/>
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }
}

// criando o css
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    margin:10,
    padding:10
  },
  texto: {
    fontSize:20,
    textAlign:'center'
  }
});