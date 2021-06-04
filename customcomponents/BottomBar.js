import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { themeColor } from '../Constants/Constants'

const BottomBar = ( { leftTile, middleTitle, rightTitle, pressedBottomBarItem, isTwoButtonRequired } ) => {
  const styles = StyleSheet.create( {
    container: { flexDirection: 'row', width: "100%", height: 50, overflow: 'hidden', },
    tabItem: { flex: 1, height: '100%', justifyContent: 'center', overflow: 'hidden' },
    textStyle: { textAlign: 'center', color: 'white' }
  } );


  return (
    <View style={ styles.container }>
      <TouchableOpacity style={ [ styles.tabItem, {
        opacity: leftTile.length == 0 ? 0 : 1,
        backgroundColor: leftTile.length == 0 ? 'clear' : themeColor,
      } ] }
        onPress={ () => { pressedBottomBarItem( "1" ) } }>
        <Text style={ styles.textStyle }>{ leftTile }</Text>
      </TouchableOpacity>

      <TouchableOpacity style={ [ styles.tabItem,
      {
        borderLeftWidth: 1, borderRightWidth: 1, opacity: middleTitle.length == 0 ? 0 : 1,
        backgroundColor: middleTitle.length == 0 ? 'clear' : themeColor,
      } ] }
        disabled={ middleTitle.length == 0 ? true : false }
        onPress={ () => { pressedBottomBarItem( "2" ) } }>
        <Text style={ styles.textStyle }>{ middleTitle }</Text>
      </TouchableOpacity>

      <TouchableOpacity style={ [ styles.tabItem, {
        opacity: rightTitle.length == 0 ? 0 : 1,
        backgroundColor: rightTitle.length == 0 ? 'clear' : themeColor,
      } ] }
        onPress={ () => { pressedBottomBarItem( "3" ) } }>
        <Text style={ styles.textStyle }>{ rightTitle }</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BottomBar