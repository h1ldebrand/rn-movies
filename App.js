import React, { useEffect, useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import StargateScreen from './src/screen1'
import BatmanScreen from './src/screen2'
import SpiderScreen from './src/screen3'
// import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BLUE } from './src/constants';


const App = createDrawerNavigator(
  {
    Screen1: {
      screen: StargateScreen,
      navigationOptions: {
        drawerLabel: 'Stargate',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="grade" size={24} style={{color: tintColor}} />
        )
      }
    },
    Screen2: {
      screen: BatmanScreen,
      navigationOptions: {
        drawerLabel: 'Batman',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="favorite" size={24} style={{color: tintColor}} />
        )
      }
    },
    Screen3: {
      screen: SpiderScreen,
      navigationOptions: {
        drawerLabel: 'Spiderman',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="pets" size={24} style={{color: tintColor}} />
        )
      }
    }
  },{
    initialRouteName: 'Screen1',
    contentOptions: {
      activeTintColor: BLUE,
      itemsContainerStyle: {
        marginVertical: 65
      }
    }
  }
);

// const navOptions = ({ navigation }) => ({
//   tabBarIcon: ({ focused, tintColor }) => {
//     const { routeName } = navigation.state;
//     let iconName
//     if(routeName === 'StarGate'){
//       iconName = focused ? 'ios-videocam' : 'ios-play'
//     }
//     else if(routeName === 'Batman'){
//       iconName = focused ? 'ios-videocam' : 'ios-play'
//     }
//     else if(routeName === 'Spider'){
//       iconName = focused ? 'ios-videocam' : 'ios-play'
//     }
//     return <Ionicons name={iconName} size={25} color={tintColor} />
//   }
// })

// const App = createBottomTabNavigator(
//   {
//     StarGate: {
//       screen: StargateScreen,
//       navigationOptions: navOptions
//     },
//     Batman: {
//       screen: BatmanScreen,
//       navigationOptions: navOptions
//     },
//     Spider: {
//       screen: SpiderScreen,
//       navigationOptions: navOptions
//     } 
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: BLUE,
//       inactiveTintColor: 'gray'
//     }
//   }
// );

export default createAppContainer(App);
