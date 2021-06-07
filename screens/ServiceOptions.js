import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, Alert, ScrollView } from 'react-native';
import BottomBar from '../customcomponents/BottomBar'
import OptionButton from '../customcomponents/OptionButton'


class ServiceOptions extends Component {
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
            customStyle={ { marginBottom: 20, width: '100%' } }
            optionTitle={ "My Tickets" }
            uniqeTag={ "1" }
            pressedOption={ ( uniqeId ) => { Alert.alert( uniqeId ) } }
          ></OptionButton>

          <OptionButton
            customStyle={ { width: '100%' } }
            optionTitle={ "All Tickets" }
            uniqeTag={ "2" }
            pressedOption={ ( uniqeId ) => { Alert.alert( uniqeId ) } }
          ></OptionButton>

        </ScrollView>

        <BottomBar
          pressedBottomBarItem={ ( btnId ) => { Alert.alert( btnId ) } }
          leftTile={ "Back" }
          middleTitle={ "Home" }
          rightTitle={ "Log Out" }
        ></BottomBar>

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
  container: { flexDirection: 'column', flex: 1, }
} );

export default ServiceOptions;
