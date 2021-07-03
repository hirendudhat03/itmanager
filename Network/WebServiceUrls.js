import AsyncStorage from '@react-native-async-storage/async-storage';


//All API Responses
export const API_STATUS_SUCCESS = 1; // Response Success
export const API_STATUS_FAIL = 0; // Response Success
export const API_STATUS_TOKEN_EXPIRED = 2; // Token Expired

// Response code(Login API)
export const Login_Incorrect_Password_Code = 101;
export const Login_User_Not_Found_Code = 404;
export const Login_Activate_Account_Remaining_Code = 601;


export const BASEURL = async () => {
  try {
    const baseUrl = await AsyncStorage.getItem( "baseurl" )
    return baseUrl
  } catch ( e ) {
    alert( 'Failed to fetch the data from storage' )
  }
};

// Profile API's
export const provide_logIn_URL = async () => {
  return ( await BASEURL() ) + 'api/login.aspx';
};