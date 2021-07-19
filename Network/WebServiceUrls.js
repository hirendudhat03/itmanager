import { Alert } from "react-native";
import AsyncStorage from "../helper/AsyncStorage";


//All API Responses
export const API_STATUS_SUCCESS = 1; // Response Success
export const API_STATUS_FAIL = 0; // Response Success
export const API_STATUS_TOKEN_EXPIRED = 2; // Token Expired

// Response code(Login API)
export const Login_Incorrect_Password_Code = 101;
export const Login_User_Not_Found_Code = 404;
export const Login_Activate_Account_Remaining_Code = 601;


export const BASEURL = async () => {
  const baseUrl = await AsyncStorage.getItem( "baseurl" )
  return baseUrl
};

// Profile API's
export const provide_logIn_URL = async () => {
  var url = await BASEURL()
  if ( url == null || url == '' ) {
    return ""
  }

  url = url + '/api/login.aspx';
  var pattern = /^((http|https|ftp):\/\/)/;
  if ( !pattern.test( url ) ) {
    url = "http://" + url;
  }
  return url
};