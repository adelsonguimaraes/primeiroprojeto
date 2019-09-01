import React, { Component } from 'react'; // importando biblioteca React
import { View, Text, Image } from 'react-native'; // importando componentes React-Native

class Janta extends Component {

  constructor(props) {
    super(props); // poder usar as props
    this.state = {comida: this.props.comida};
    let comidas = ['Pizza', 'Lasanha', 'Burger', 'Sopa', 'Arroz'];

    setInterval(()=>{
      this.setState(previousState=>{
        let n = Math.floor(Math.random() * comidas.length);
        return {comida: comidas[n]};
      });
    }, 1000);
  }

  render() {
    return(
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'red'}}>Hoje você vai jantar:</Text>
        <Text style={{textAlign:'center', fontSize:20}}>{this.state.comida}</Text>
      </View>
    );
  }
}

export default class PrimeiroProjeto extends Component {
  render() { // função de renderização para um componente component

    return (
      
      <View style={{paddingTop:20}}> 
        <Janta comida='Café'/>
      </View>
    );
  }
}