import React, { Component } from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { themeColor } from '../Constants/Constants'
import BottomBar from '../customcomponents/BottomBar'
import OptionButton from '../customcomponents/OptionButton'

class LogInScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor( props ) {
    super( props );

  }

  componentDidMount = () => {
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        <View style={ { flex: 1 } }>
          {/* Settings Button */ }
          <View style={ { width: '100%', height: 30, flexDirection: 'row', justifyContent: 'flex-end' } }>
            <TouchableOpacity style={ { width: 30, height: 30, marginRight: 5 } }>
              <Image source={ require( '../assets/images/settings.png' ) }
                style={ { width: 30, height: 30 } }
              />
            </TouchableOpacity>
          </View>

          {/* Logo Image */ }
          <Image source={ require( '../assets/images/applogo.png' ) }
            style={ { width: 200, height: 133, alignSelf: 'center' } }
          />


          {/* Login fields */ }
          <View style={ { flexDirection: 'column', justifyContent: 'center' } }>
            <TextInput
              style={ styles.inputStyle }
              onChangeText={ this.updatedUserName }
              value={ 1 }
              placeholder="username"
            // keyboardType="numeric"
            />
            <TextInput
              style={ styles.inputStyle }
              onChangeText={ this.updatedUserPassword }
              value={ 1 }
              secureTextEntry={ true }
              placeholder="password"
            // keyboardType="numeric"
            />

            <OptionButton
              customStyle={ { borderRadius: 5, backgroundColor: 'green' } }
              optionTitle={ "Log In" }
              uniqeTag={ "1" }
              pressedOption={ ( uniqeId ) => { Alert.alert( uniqeId ) } }
            ></OptionButton>

          </View>
        </View>
      </SafeAreaView>
    );
  }

  updatedUserName = () => {
    // Alert.alert( "123" )
  }
  updatedUserPassword = () => {
    // Alert.alert( "123" )
  }

  onPress = () => {
    Alert.alert( "123" )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    borderColor: 'lightgray'
  },

} );

export default LogInScreen;
