import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Alert,
} from 'react-native';
import { themeColor } from '../Constants/Constants';
import BottomBar from '../customcomponents/BottomBar';

class ItemListScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor( props ) {
    super( props );
    this.DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];
  }

  renderItem = ( { item } ) => (
    <View style={ styles.item }>
      <Text style={ styles.textStyle }>{ item.title }</Text>

      <View
        style={ {
          width: 60,
          height: 27,
          backgroundColor: themeColor,
          position: 'absolute',
          right: 0,
          justifyContent: 'center',
          flexDirection: 'column',
          borderRadius: 3,
        } }>
        <Text style={ { textAlign: 'center', color: 'white' } }>{ '7.8' }</Text>
      </View>
    </View>
  );

  componentDidMount = () => { };

  render() {
    console.log( '=== DATA ' );
    console.log( this.DATA );
    return (
      <SafeAreaView style={ styles.container }>
        <FlatList
          data={ this.DATA }
          renderItem={ this.renderItem }
          keyExtractor={ item => item.id }
        />
        <BottomBar
          pressedBottomBarItem={ btnId => {

          } }
          leftTile={ 'Back' }
          middleTitle={ 'Home' }
          rightTitle={ 'Log Out' }></BottomBar>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 0,
    marginTop: 10,
    marginHorizontal: 5,
    height: 35,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 5,
    textAlign: 'center',
    alignSelf: 'center',
  },
} );

export default ItemListScreen;
