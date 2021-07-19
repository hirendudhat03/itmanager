import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Textfield = props => {

  return props.Display == 'True' ? (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.LabelName}</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder={props.Default_Value}
        editable={props.ReadOnly == 'True' ? false : true}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  viewStyle: {height: 70, marginHorizontal: 20, marginTop: 20},
  textStyle: {fontSize: 16, color: 'black', paddingHorizontal: 0, height: 30},
  textInputStyle: {
    fontSize: 16,
    borderWidth: 0.2,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default Textfield;
