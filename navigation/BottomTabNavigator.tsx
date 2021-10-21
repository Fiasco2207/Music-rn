import { FontAwesome, Entypo, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { TabOneParamList, TabTwoParamList } from '../types';
import { RootTabParamList } from '../types';
import AlbumScreen from "../screens/AlbumScreen";
import colors from '../config/colors';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: colors.white, 
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.bottomTab, height: 55}
      }}
      >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ size }) => <Entypo name="home" color={colors.white} size={size} style={{marginBottom: -3}} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <EvilIcons name="search" color={colors.white} size={30} style={{marginBottom: -3}} />,
        }}
      />
      {/*
      <BottomTab.Screen
        name="Radio"
        component={ModalScreen}
        options={{
          title: 'Radio',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="radio" color={color} size={30} style={{marginBottom: -3}} />,
        }}
      />*/}
    </BottomTab.Navigator>
  );
}



const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home', headerShown: false,}}
        
      />
      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album', headerShown: false,}}
      />
    </TabOneStack.Navigator>
    
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

export default BottomTabNavigator;