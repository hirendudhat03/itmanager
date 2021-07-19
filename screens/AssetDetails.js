import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, Alert, ScrollView, Text } from 'react-native';
import BottomBar from '../customcomponents/BottomBar';
import OptionButton from '../customcomponents/OptionButton';
import GlobalInclude from '../globalInclude/GlobalInclude';
import AsyncStorage from "../helper/AsyncStorage";

var fromData = GlobalInclude.From;
const AssetDetails = ( props ) => {
  const [ fromDataState, setFromDataState ] = useState( [] );

  useEffect( () => {

    getDataForScannedCode()
  }, [] );

  const getDataForScannedCode = async ( date, id ) => {
    const scannedCode = await AsyncStorage.getItem( 'scannedcode' )
    const userInfoStr = await AsyncStorage.getItem( 'userInfo' )
    const userInfoObj = JSON.parse( userInfoStr )

    let url = 'barcodescan.aspx';
    var requestObj = {
      //TokenNo: '796db6eb-1f38-4f5f-9110-fd8234ec9be8',
      TokenNo: userInfoObj[ 'TokenNo' ],
      // Barcode: 'BEPR0001',
      Barcode: scannedCode,
    };
    console.log( '============ requestObj is =======' )
    console.log( JSON.stringify( requestObj ) )

    GlobalInclude.Helper.UrlReq( url, 'POST', requestObj ).then( response => {
      console.log( 'response : ', response );

      if ( response.Status == 1 ) {
        //alert('true');
        setFromDataState( response.Values );
        //global.global_loader_reff.show_loader(0);
      } else {
        alert( response.Message );
        //global.global_loader_reff.show_loader(0);
      }
    } );
  }

  const updateDate = ( date, id ) => {
    var clone = fromDataState;

    // console.log('data : ', clone);
    var i = 0;
    for ( i = 0; i < clone.length; i++ ) {
      // console.log('i : ', i);
      // console.log('Id : ', clone[i].Id);
      if ( clone[ i ].Id == id ) {
        clone[ i ].Default_Value = date;
        setFromDataState( [ ...clone ] );
        // console.log('fromDataState : ', fromDataState);
      }
    }
  };

  const displayItem = data => {
    var clone = [];
    //console.log('data : ',data);
    data.map( data => {
      clone.push( data.Name );
      //return data.Name;
    } );
    console.log( clone );
    return clone;
  };

  const selectFeild = () => {
    // var data = fromData.Values;
    return fromDataState.map( data => {
      if ( data.Original_Type == 'TextBox' ) {
        return (
          <GlobalInclude.Textfield
            LabelName={ data.LabelName }
            Default_Value={ data.Default_Value }
            ReadOnly={ data.ReadOnly }
            Display={ data.Display }
            Mandatory={ data.Mandatory }
          />
        );
      } else if ( data.Original_Type == 'Date' ) {
        return (
          <GlobalInclude.Datebox
            LabelName={ data.LabelName }
            Default_Value={ data.Default_Value }
            Date_Format={ data.Date_Format }
            ReadOnly={ data.ReadOnly }
            Display={ data.Display }
            Mandatory={ data.Mandatory }
            onDateChange={ date => updateDate( date, data.Id ) }
          />
        );
      } else if ( data.Original_Type == 'Dropdown' ) {
        return (
          <GlobalInclude.Dropdown
            AllData={ fromDataState }
            LabelName={ data.LabelName }
            Default_Value={ data.Default_Value }
            Value={ data.Value }
            ReadOnly={ data.ReadOnly }
            Display={ data.Display }
            Mandatory={ data.Mandatory }
            Custom_Type={ data.Custom_Type }
          />
        );
      } else if ( data.Original_Type == 'Suggest' ) {
        return (
          <GlobalInclude.Suggest
            LabelName={ data.LabelName }
            Default_Value={ data.Default_Value }
            Value={ data.Value }
            ReadOnly={ data.ReadOnly }
            Display={ data.Display }
            Mandatory={ data.Mandatory }
          // onChangeText={(value) => data.Default_Value = value}
          />
        );
      } else if ( data.Original_Type == 'Browse' ) {
        return (
          <GlobalInclude.Browse
            LabelName={ data.LabelName }
            ReadOnly={ data.ReadOnly }
            Display={ data.Display }
            Mandatory={ data.Mandatory }
          />
        );
      } else {
        return null;
      }
    } );
  };

  const fromSubmit = () => {
    Alert.alert( 'From submit successfully' );
  };

  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView
        //contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        style={ styles.container }
        scrollEnabled={ true }>
        { selectFeild() }
        <OptionButton
          customStyle={ {
            borderRadius: 5,
            backgroundColor: 'green',
            marginTop: 25,
          } }
          optionTitle={ 'Submit' }
          uniqeTag={ '1' }
          pressedOption={ uniqeId => {
            fromSubmit();
          } }></OptionButton>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create( {
  container: { flexDirection: 'column', flex: 1 },
} );

export default AssetDetails;
