import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home/index.jsx';
import ProfileScreen from './screens/Profile/index.jsx';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Want to be Rich!!!'}}
        />
        
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{title:'Done'}} 
        />     
        

      </Stack.Navigator>

    </NavigationContainer>
  );
}


