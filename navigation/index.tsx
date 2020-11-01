import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import StartScreen from '../screens/StartScreen';
import AuthorizationScreen from '../screens/Authorization';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Authorization"
                component={AuthorizationScreen}
            />
            <Stack.Screen name="Home" component={StartScreen} />

            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
        </Stack.Navigator>
    );
}
