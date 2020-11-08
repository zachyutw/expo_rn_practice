import React from 'react';
import EditProfile from './EditProfile';
import { createStackNavigator } from '@react-navigation/stack';
import UserConfig from './UserConfig';

const Stack = createStackNavigator();

const UserConfigStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UserConfig" component={UserConfig} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
    );
};

export default UserConfigStack;
