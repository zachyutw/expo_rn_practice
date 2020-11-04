import React from 'react';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
export const assets = [];

export type AuthenticationRoutes = {
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    PasswordChanged: undefined;
};

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
};

export interface AuthNavigationProps<
    RouteName extends keyof AuthenticationRoutes
> {
    navigation: CompositeNavigationProp<
        StackNavigationProp<AuthenticationRoutes, RouteName>,
        DrawerNavigationProp<AppRoutes, 'Home'>
    >;
    route: RouteProp<AuthenticationRoutes, RouteName>;
}

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
