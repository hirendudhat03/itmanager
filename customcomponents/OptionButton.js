import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { themeColor } from '../Constants/Constants'

const OptionButton = ( { optionTitle, pressedOption, uniqeTag, customStyle } ) => {
  const styles = StyleSheet.create( {
    container: { backgroundColor: themeColor, width: 180, height: 50, alignSelf: 'center', justifyContent: 'center' },
    tabItem: { flex: 1, height: '100%', justifyContent: 'center', overflow: 'hidden' },
    textStyle: { textAlign: 'center', color: 'white' }
  } );

  return (
    <TouchableOpacity style={ [ styles.container, customStyle ] }
      onPress={ () => { pressedOption( uniqeTag ) } }>
      <Text style={ styles.textStyle }>{ optionTitle }</Text>
    </TouchableOpacity>
  );
};
export default OptionButton