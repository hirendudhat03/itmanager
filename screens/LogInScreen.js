import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  ImageBackground
} from 'react-native';
import { themeColor, CheckConnectivity } from '../Constants/Constants';
import * as WebServiceUrls from '../Network/WebServiceUrls';;
import BottomBar from '../customcomponents/BottomBar';
import OptionButton from '../customcomponents/OptionButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


class LogInScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor( props ) {
    super( props );
    this.manageUserStatus()
    this.userNameString = ""
    this.passwordString = ""
  }

  manageUserStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem( "isLoggedIn" )
      if ( isLoggedIn === "1" ) {
        this.props.navigation.navigate( 'DashBoard' );
      }
    } catch ( e ) {
      alert( 'Failed to fetch the data from storage' )
    }
  }

  componentDidMount = async () => {
    try {
      await AsyncStorage.setItem( "baseurl", "http://demo.itmanager.co.in/" )
      //alert( 'Data successfully saved' )
    } catch ( e ) {
      //alert( 'Failed to save the data to the storage' )
    }
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        {/* <ImageBackground resizeMode='cover'
          source={ require( '../assets/images/shieldLogo.png' ) }
          style={ { flex: 1, opacity: 0.1 } }> */}
        <View style={ { flex: 1 } }>
          {/* Settings Button */ }
          <View
            style={ {
              width: '100%',
              height: 30,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            } }>
            <TouchableOpacity style={ { width: 30, height: 30, marginRight: 5 } }>
              <Image
                source={ require( '../assets/images/settings.png' ) }
                style={ { width: 30, height: 30 } }
              />
            </TouchableOpacity>
          </View>

          {/* Logo Image */ }
          <Image
            source={ require( '../assets/images/applogo.png' ) }
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

            <View style={ { flexDirection: 'row', justifyContent: 'flex-end' } }>
              <OptionButton
                customStyle={ { borderRadius: 5, backgroundColor: 'green', margin: 12, } }
                optionTitle={ 'Log In' }
                uniqeTag={ '1' }
                pressedOption={ uniqeId => {
                  this.pressedLogIn()
                } }></OptionButton>
            </View>


          </View>
        </View>
        {/* </ImageBackground> */ }
      </SafeAreaView>
    );
  }

  updatedUserName = ( userNameString ) => {
    this.userNameString = userNameString

  };
  updatedUserPassword = ( passwordString ) => {
    this.passwordString = passwordString
  };

  passedValidation = () => {
    if ( this.userNameString.replace( /\s+/g, '' ) == "" ||
      this.passwordString.replace( /\s+/g, '' ) == "" ) {
      Alert.alert( "Please provide user name & password." )
      return false
    }
    return true
  }



  pressedLogIn = async () => {

    if ( this.passedValidation() == false ) {
      return
    }

    const logIn_URL = await WebServiceUrls.provide_logIn_URL()
    console.log( "=========" + logIn_URL )

    var request = new XMLHttpRequest();
    request.onreadystatechange = ( e ) => {
      if ( request.readyState !== 4 ) {
        return;
      }

      if ( request.status === 200 ) {
        console.log( request.responseText );
        const responseObj = JSON.parse( request.responseText );
        console.log( "=========" )
        console.log( JSON.stringify( responseObj ) );

        if ( responseObj[ "Status" ] == "1" ) {
          AsyncStorage.setItem( "isLoggedIn", "1" )
          AsyncStorage.setItem( "userInfo", request.responseText )
          this.props.navigation.navigate( 'DashBoard' );
        } else {
          Alert.alert( responseObj[ "Message" ] )
        }
      } else {
        console.log(
          logIn_URL + '======================================= Error occurred',
        );
        console.log( request.statusText );
        Alert.alert( "Error occured " )
      }
    };


    var params = JSON.stringify( {
      //UserName: "Manish",
      //Password: "123",
      UserName: this.userNameString,
      Password: this.passwordString,
    } );

    request.open( 'POST', logIn_URL );
    request.setRequestHeader( 'Content-Type', 'application/json;charset=UTF-8' );
    request.timeout = 8000;
    request.ontimeout = function () {
      // Alert.alert('Request Timed out!!!');
    };
    request.send( params );

    console.log( '======= API CALLED ======' );
    console.log( 'Url : ' + logIn_URL + 'Params are :' + params );
  };
};


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
    borderColor: 'lightgray',
  },
} );

export default LogInScreen;
