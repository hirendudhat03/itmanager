import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// App screens
import LogInScreen from '../screens/LogInScreen';
import DashBoard from '../screens/DashBoard';
import AssetManagerScan from '../screens/AssetManagerScan';
import ItemListScreen from '../screens/ItemListScreen';
import ServiceOptions from '../screens/ServiceOptions';
import AssetDetails from '../screens/AssetDetails';


const HomeStack = createStackNavigator( {
  LogInScreen: {
    screen: LogInScreen,
  },
  AssetDetails: {
    screen: AssetDetails,
  },
  DashBoard: {
    screen: DashBoard,
  },
  ServiceOptions: {
    screen: ServiceOptions,
  },
  ItemListScreen: {
    screen: ItemListScreen,
  },
  AssetManagerScan: {
    screen: AssetManagerScan,
  },

  DashBoard: {
    screen: DashBoard,
  },
} );

const AppContainer = createAppContainer( HomeStack );
export default AppContainer;
