import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Alert, ScrollView, Modal } from 'react-native';
import BottomBar from '../customcomponents/BottomBar'
import OptionButton from '../customcomponents/OptionButton'
import AsyncStorage from "../helper/AsyncStorage";
import QRScanner from '../customcomponents/QRScanner.js'


class DashBoard extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    isScannerVisible: false
  }
  constructor( props ) {
    super( props );
  }

  componentDidMount = () => {
  };

  render() {
    return (
      <SafeAreaView style={ styles.container }>

        <ScrollView contentContainerStyle={ { flexGrow: 1, justifyContent: 'center' } }
          style={ styles.container }
          scrollEnabled={ false }>

          <OptionButton
            customStyle={ { marginBottom: 20 } }
            optionTitle={ "Asset Manager" }
            uniqeTag={ "1" }
            pressedOption={ ( uniqeId ) => { this.openScanner() } }
          ></OptionButton>

          <OptionButton
            optionTitle={ "Service Desk" }
            uniqeTag={ "2" }
            pressedOption={ ( uniqeId ) => { } }
          ></OptionButton>

        </ScrollView>

        <BottomBar
          pressedBottomBarItem={ ( btnId ) => { this.logOutUser() } }
          leftTile={ "" }
          middleTitle={ "" }
          rightTitle={ "Log Out" }
        ></BottomBar>

        <Modal
          animationType="slide"
          transparent={ false }
          visible={ this.state.isScannerVisible }
          onRequestClose={ () => {
          } }
        >
          <QRScanner
            pressedCancel={ () => {
              this.setState( { isScannerVisible: false } )
            } }
            scannedCodeSuccessfully={ this.scannedCodeSuccessfully }
          ></QRScanner>

        </Modal>

      </SafeAreaView>
    );
  }
  scannedCodeSuccessfully = async ( event ) => {
    this.setState( { isScannerVisible: false } )

    if ( event.error == null ) {
      // Alert.alert( "Scanned = " + event.data )

      AsyncStorage.setItem( "scannedcode", event.data )
      this.props.navigation.navigate( 'AssetDetails' );

    } else {
      // Alert.alert( "Scanned = " + event.error )
    }
  }

  tempMoveToDerailsScreen = () => {
    this.props.navigation.navigate( 'AssetDetails' );
  }

  openScanner = () => {
    this.setState( { isScannerVisible: true } )
  }


  logOutUser = async () => {
    await AsyncStorage.removeItem( "isLoggedIn" );
    await AsyncStorage.removeItem( "userInfo" );

    this.props.navigation.popToTop();
    this.props.navigation.replace( 'LogInScreen' );
  }

  updatedUserName = () => {

  }
  updatedUserPassword = () => {

  }

  onPress = () => {

  }
}

const styles = StyleSheet.create( {
  container: { flexDirection: 'column', flex: 1, }
} );

export default DashBoard;
