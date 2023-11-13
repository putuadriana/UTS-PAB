import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import Tabs from './screens/tabs/_layout';
import Detail from './screens/tabs/detail';

const Stack = createNativeStackNavigator();
const noHead = { headerShown: false };

function StackLayout() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
            <Stack.Screen name="Detail" component={Detail} options={noHead}/>
        </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default StackLayout;