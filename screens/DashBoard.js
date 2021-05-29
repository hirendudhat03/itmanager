import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, TextInput } from 'react-native';

class DashBoard extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor( props ) {
    super( props );
    console.log( "==== VISHAL" )
  }

  componentDidMount = () => {
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <View style={ { backgroundColor: 'green', flex: 1 } }>
          <TouchableOpacity style={ styles.urlButton }
            onPress={ this.onPress }>
            <Text style={ { textAlign: 'center' } }>URL</Text>
          </TouchableOpacity>

          <View style={ { flexDirection: 'column', justifyContent: 'center', flex: 1 } }>
            <TextInput
              style={ styles.inputStyle }
              onChangeText={ this.updatedUserName }
              value={ 1 }
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
            <TextInput
              style={ styles.inputStyle }
              onChangeText={ this.updatedUserName }
              value={ 1 }
              placeholder="useless placeholder"
              keyboardType="numeric"
            />

            <TouchableOpacity style={ { backgroundColor: 'red', width: 100, height: 35, alignSelf: 'center', justifyContent: 'center' } }
              onPress={ this.onPress }>
              <Text style={ { textAlign: 'center', } }>URL</Text>
            </TouchableOpacity>

          </View>
        </View>
      </SafeAreaView>
    );
  }

  updatedUserName = () => {
    Alert.alert( "123" )
  }
  updatedUserPassword = () => {
    Alert.alert( "123" )
  }

  onPress = () => {
    Alert.alert( "123" )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  urlButton: {
    width: 100,
    height: 35,
    backgroundColor: 'blue',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },

} );

export default DashBoard;
