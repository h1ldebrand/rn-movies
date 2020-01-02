import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { BATMAN_HOME, BATMAN_DETAILS } from "../routes";

import { HomeScreen } from './HomeScreen'
import { DetailsScreen } from './DetailsScreen'

const AppNavigator = createStackNavigator({
    [BATMAN_HOME]: {
      screen: HomeScreen,
    },
    [BATMAN_DETAILS]: {
      screen: DetailsScreen
    },
  }, {
    headerMode: 'none',
   });

  
export default AppNavigator;
// export default createAppContainer(AppNavigator);
