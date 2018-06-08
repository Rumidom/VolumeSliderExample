import React, { Component } from 'react';
import { Slider, View, StyleSheet, Text, TextInput,TouchableHighlight } from 'react-native';
//import { Constants, Location, Permissions } from 'expo';
//import SystemSetting from 'react-native-system-setting';

export default class App extends Component {
  
  state = {
    value: 0,
  };

  ChangeVolume(Valor){
  //SystemSetting.setVolume(Valor);
  this.setState({value:Valor});
  } 

  onPress(){
    console.log("botão!")
  }
  

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };


  render() {
    return (
      <View style={styles.container}>

        <Slider
          style={{ flex: 0.5, alignSelf: 'stretch' }}
          value={this.state.value}
          onValueChange={value => this.ChangeVolume(value)}
        />

        <Text style={{ fontSize: 60, marginBottom: 30 }}>
          {this.state.value}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

