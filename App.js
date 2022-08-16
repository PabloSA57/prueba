import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createStackNavigator();

import CreateUser from './screens/CreateUserScren';
import UserDetail from './screens/UserDetailScren';
import UserList from './screens/UserList';
import Login from './screens/Login';

function MyStack(){
  return(
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name="UserList" component={UserList}/>
        <Stack.Screen name="CreateUser" component={CreateUser}/>
        <Stack.Screen name="UserDetail" component={UserDetail}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
