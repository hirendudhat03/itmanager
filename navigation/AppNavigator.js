import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import DashBoard from '../screens/DashBoard';

const HomeStack = createStackNavigator({
  DashBoard: {
    screen: DashBoard,
  },
});

const AppContainer = createAppContainer(HomeStack);
export default AppContainer;
