import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import DatePicker from 'react-native-datepicker';

const Datebox = props => {
  return props.Display == 'True' ? (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.LabelName}</Text>
      <DatePicker
        style={{width: 200}}
        date={props.Default_Value}
        mode="date"
        placeholder={props.LabelName}
        format={props.Date_Format}
        disabled={props.ReadOnly == 'True' ? false : true}
        // minDate="2016-05-01"
        // maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={props.onDateChange}
      />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  viewStyle: {height: 60, marginHorizontal: 20, marginTop: 20},
  textStyle: {fontSize: 16, color: 'black', paddingHorizontal: 0, height: 30},
});

export default Datebox;
