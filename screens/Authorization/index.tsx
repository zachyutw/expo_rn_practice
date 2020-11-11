import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import { AuthenticationRoutes } from './navigation';
export const assets = [];

const AuthenticationStack = createStackNavigator<AuthenticationRoutes>();
// todo ForgotPassword, PasswordChanged
const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
        </AuthenticationStack.Navigator>
    );
};

export default AuthenticationNavigator;
