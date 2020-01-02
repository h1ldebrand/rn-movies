import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { SPIDER_HOME, SPIDER_DETAILS } from "../routes";

import { HomeScreen } from './HomeScreen'
import { DetailsScreen } from './DetailsScreen'


const AppNavigator = createStackNavigator({
    [SPIDER_HOME]: {
      screen: HomeScreen,
    },
    [SPIDER_DETAILS]: {
      screen: DetailsScreen
    },
  }, {
    headerMode: 'none',
   });

  
export default AppNavigator;
// export default createAppContainer(AppNavigator);
