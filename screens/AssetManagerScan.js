import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import BottomBar from '../customcomponents/BottomBar'
import { themeColor } from '../Constants/Constants'



class AssetManagerScan extends Component {
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
          <ScrollView style={ { flex: 1 } }></ScrollView>
          <BottomBar
            pressedBottomBarItem={ ( btnId ) => { Alert.alert( btnId ) } }
            leftTile={ "Back" }
            middleTitle={ "" }
            rightTitle={ "Log Out" }
          ></BottomBar>
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
    flexDirection: 'column',
  },
  urlButton: {
    width: 100,
    height: 35,
    backgroundColor: themeColor,
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

export default AssetManagerScan;
