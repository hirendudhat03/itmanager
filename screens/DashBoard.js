import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Alert, ScrollView } from 'react-native';
import BottomBar from '../customcomponents/BottomBar'
import OptionButton from '../customcomponents/OptionButton'


class DashBoard extends Component {
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

        <ScrollView contentContainerStyle={ { flexGrow: 1, justifyContent: 'center' } }
          style={ styles.container }
          scrollEnabled={ false }>

          <OptionButton
            customStyle={ { marginBottom: 20 } }
            optionTitle={ "Asset Manager" }
            uniqeTag={ "1" }
            pressedOption={ ( uniqeId ) => { this.tempMoveToDerailsScreen() } }
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

      </SafeAreaView>
    );
  }

  tempMoveToDerailsScreen = () => {
    this.props.navigation.navigate( 'AssetDetails' );
  }


  logOutUser = async () => {

    try {
      await AsyncStorage.removeItem( "isLoggedIn" );
    }
    catch ( exception ) {
    }

    try {
      await AsyncStorage.removeItem( "userInfo" );
    }
    catch ( exception ) {
    }

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
