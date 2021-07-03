import NetInfo from '@react-native-community/netinfo';

// Theme color (From Web)
export const themeColor = '#0072bc';

export async function CheckConnectivity( callback ) {
    NetInfo.fetch().then( state => {
        console.log( 'Connection type', state.type );
        console.log( 'Is connected?', state.isConnected );
        if ( state.isConnected ) {
            if ( callback !== null && callback !== undefined ) {
                callback( true );
            }
            return true;
        } else {
            if ( callback !== null && callback !== undefined ) {
                callback( false );
            }
            return false;
        }
    } );
}