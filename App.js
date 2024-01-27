// App.js


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DomainForm from '../expoapp/src/Screens/DomainScreen';
import LoginForm from '../expoapp/src/Screens/Login';
import Profile from '../expoapp/src/Screens/Profile';
import BottomTabNavigation from './src/Screens/navigation/BottomTabNavigation';





const Stack = createStackNavigator();

const App = () => {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DomainScreen" component={DomainForm}   options={{ headerShown: false }} />
        <Stack.Screen name="LoginForm" component={LoginForm}   options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={BottomTabNavigation}  options={{headerShown:false}} />
          
      </Stack.Navigator> 
    </NavigationContainer>
    
  );
};

export default App;
