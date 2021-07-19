import React from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { themeColor } from '../Constants/Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const InsertUrlPopUp = ( { updatedUrlText, pressedSaveSettingURL } ) => {
  const styles = StyleSheet.create( {
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    textInputStyle: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: 'lightgray',
      height: 35,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 40
    },
  } );

  return (
    <KeyboardAwareScrollView contentContainerStyle={ styles.centeredView }>
      <View style={ styles.modalView }>
        <Text style={ styles.modalText }>{ 'Please enter a provided link ' }</Text>
        <TextInput
          style={ styles.textInputStyle }
          placeholder={ "server url." }
          editable={ true }
          autoFocus={ true }
          onChangeText={ updatedUrlText }
        />
        <TouchableOpacity style={ { backgroundColor: themeColor, width: 100, height: 30, justifyContent: 'center', alignItems: 'center' } }
          onPress={ pressedSaveSettingURL }>
          <Text style={ { color: 'white', borderRadius: 5 } }>{ 'Save' }</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAwareScrollView>
  );
};
export default InsertUrlPopUp