import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
  Text
} from 'react-native';
import { themeColor, CheckConnectivity } from '../Constants/Constants';
import * as WebServiceUrls from '../Network/WebServiceUrls';;
import BottomBar from '../customcomponents/BottomBar';
import InsertUrlPopUp from '../customcomponents/InsertUrlPopUp.js'
import OptionButton from '../customcomponents/OptionButton';
import AsyncStorage from "../helper/AsyncStorage";
import * as Progress from 'react-native-progress';



class LogInScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    isBaseUrlPopVisible: false,
    isLoading: false
  }
  constructor( props ) {
    super( props );
    this.manageUserStatus()
    this.userNameString = ""
    this.passwordString = ""
    this.savedUrl = ""
  }

  manageUserStatus = async () => {
    const isLoggedIn = await AsyncStorage.getItem( "isLoggedIn" )
    // Alert.alert( 'isLoggedIn : = ' + isLoggedIn )
    if ( isLoggedIn != null ) {
      this.props.navigation.navigate( 'DashBoard' );
    }
  }


  pressedSaveSettingURL = async () => {
    //AsyncStorage.setItem( "baseurl", "http://demo.itmanager.co.in/" )
    //Alert.alert( this.savedUrl )
    AsyncStorage.setItem( "baseurl", this.savedUrl )
    this.setState( { isBaseUrlPopVisible: false } )
  }

  updatedUrlTextInsettings = async ( value ) => {
    this.savedUrl = value
  }
  pressedLogIn = async () => {

    if ( await this.passedValidation() == false ) {
      return
    }

    const logIn_URL = await WebServiceUrls.provide_logIn_URL()
    console.log( "=========" + logIn_URL )

    this.setState( {
      isLoading: true
    } )

    var request = new XMLHttpRequest();
    request.onreadystatechange = ( e ) => {
      if ( request.readyState !== 4 ) {
        return;
      }

      this.setState( {
        isLoading: false
      } )

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

  passedValidation = async () => {

    const logIn_URL = await WebServiceUrls.provide_logIn_URL()

    if ( logIn_URL == "" ) {
      Alert.alert( "Please enter your baseurl by click on settings icon." )
      return false
    } else if ( this.userNameString.replace( /\s+/g, '' ) == "" ||
      this.passwordString.replace( /\s+/g, '' ) == "" ) {
      Alert.alert( "Please provide user name & password." )
      return false
    }
    return true

  }

  updatedUserName = ( userNameString ) => {
    this.userNameString = userNameString
  };
  updatedUserPassword = ( passwordString ) => {
    this.passwordString = passwordString
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
            <TouchableOpacity style={ { width: 30, height: 30, marginRight: 5 } }
              onPress={ () => {
                this.setState( { isBaseUrlPopVisible: true } )
              } }>
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

            <View style={ { flexDirection: 'row', justifyContent: 'center' } }>
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
        <Modal
          animationType="slide"
          transparent={ true }
          visible={ this.state.isBaseUrlPopVisible }
          onRequestClose={ () => {
            Alert.alert( "Modal has been closed." );
            this.setModalVisible( !modalVisible );
          } }
        >
          <InsertUrlPopUp
            updatedUrlText={ this.updatedUrlTextInsettings }
            pressedSaveSettingURL={ this.pressedSaveSettingURL }></InsertUrlPopUp>

        </Modal>
        { this.state.isLoading ? (
          <View style={ { flex: 1, alignSelf: 'center', } }>
            <Progress.Circle size={ 50 } indeterminate={ true } />
          </View>
        ) : null }
      </SafeAreaView>
    );
  }

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
