import { Image } from 'react-native'
import React from 'react'
import Profile from '../Profile'
import CalenderScreen from '../CalenderScreen'
import HolidayScreen from '../HolidayScreen'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../ProfileScreen'

const Tab = createBottomTabNavigator();






export default function BottomTabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home"
         component={Profile}
         options={{
          tabBarLabel: '', // Set tabBarLabel to an empty string

          tabBarIcon:({focused}) =>(
            <Image
            source={require('../../../assets/icons8-home-96.png')} // Replace 'path-to-your-icon.png' with the actual path to your PNG image
            style={{ width: 24, height: 24,tintColor: focused ? '#00A9FF' : "black",}} // Adjust the width and height as needed
          />

          ),
          headerShown: false, // Hide the header for this screen

          
         }}
          />
        <Tab.Screen name="Calender" 
        component={CalenderScreen}
        
        options={{
          tabBarLabel: '', // Set tabBarLabel to an empty string

          tabBarIcon:({focused}) =>(
            <Image
            source={require('../../../assets/icons8-calendar-96.png')} // Replace 'path-to-your-icon.png' with the actual path to your PNG image
            style={{ width: 30, height: 30, tintColor: focused ? '#00A9FF' : "black",}} // Adjust the width and height as needed

          /> 

          ),
          headerShown: false, // Hide the header for this screen

         }}
          
        
        />
        <Tab.Screen name="Holiday" 
        component={HolidayScreen}
        options={{
          tabBarLabel: '', // Set tabBarLabel to an empty string

          tabBarIcon:({focused}) =>(
            <Image
            source={require('../../../assets/icons8-holiday-96.png')} // Replace 'path-to-your-icon.png' with the actual path to your PNG image
            style={{ width: 30, height: 30,tintColor: focused ? '#00A9FF' : "black",}} // Adjust the width and height as needed
          />

          ),
          headerShown: false, // Hide the header for this screen

         }}
        
        />
        <Tab.Screen name="ProfileScreen"
         component={ProfileScreen} 
         options={{
          tabBarLabel: '', // Set tabBarLabel to an empty string

          tabBarIcon:({focused}) =>(
            <Image
            source={require('../../../assets/icons8-user-96.png')} // Replace 'path-to-your-icon.png' with the actual path to your PNG image
            style={{ width: 30, height: 30,tintColor: focused ? '#00A9FF' : "black",}} // Adjust the width and height as needed
          />

          ),
                headerShown: false, // Hide the header for this screen

         }}
         
         />
      </Tab.Navigator>  
  )
}