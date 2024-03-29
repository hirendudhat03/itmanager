'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QRScanner = ( { pressedCancel, scannedCodeSuccessfully } ) => {
  const styles = StyleSheet.create( {
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  } );



  return (
    <QRCodeScanner
      onRead={ scannedCodeSuccessfully }
      flashMode={ RNCamera.Constants.FlashMode.torch }
      topContent={
        <Text style={ styles.centerText }>
          <Text style={ styles.textBold }>scan QR code for the asset.</Text>
        </Text>
      }
      bottomContent={
        <TouchableOpacity
          onPress={ pressedCancel }
          style={ styles.buttonTouchable }>
          <Text style={ styles.buttonText }>Cancel</Text>
        </TouchableOpacity>
      }
    />
  );
}
export default QRScanner