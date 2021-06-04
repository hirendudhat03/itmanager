import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, TextInput } from 'react-native';
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
          <BottomBar
            pressedBottomBarItem={ ( btnId ) => { Alert.alert( btnId ) } }
            leftTile={ "" }
            middleTitle={ "" }
            rightTitle={ "URL" }
          ></BottomBar>

          <View style={ { flexDirection: 'column', justifyContent: 'center', flex: 1 } }>
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
              customStyle={ { borderRadius: 5 } }
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
