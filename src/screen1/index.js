import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { STARGATE_HOME, STARGATE_DETAILS } from "../routes";

import { HomeScreen } from './HomeScreen'
import { DetailsScreen } from './DetailsScreen'

console.log(DetailsScreen)

const AppNavigator = createStackNavigator({
    [STARGATE_HOME]: {
      screen: HomeScreen,
    },
    [STARGATE_DETAILS]: {
      screen: DetailsScreen
    },
  }, {
    headerMode: 'none',
   });

  
export default AppNavigator;
// export default createAppContainer(AppNavigator);
