import React from 'react';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// import Onboarding, { assets as onBoardingAssets } from "./Onboarding";
import Welcome, { assets as welcomeAssets } from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
// import ForgotPassword from "./ForgotPassword";
// import PasswordChanged from "./PasswordChanged";
export const assets = [...welcomeAssets];

export type AuthenticationRoutes = {
    Onboarding: undefined;
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

export type HomeRoutes = {
    OutfitIdeas: undefined;
    FavoriteOutfits: undefined;
    TransactionHistory: undefined;
    EditProfile: undefined;
};

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
}

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
const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            {/* <AuthenticationStack.Screen name="Onboarding" component={Onboarding} /> */}
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
            {/* <AuthenticationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      /> */}
            {/* <AuthenticationStack.Screen
        name="PasswordChanged"
        component={PasswordChanged}
      /> */}
        </AuthenticationStack.Navigator>
    );
};

export default AuthenticationNavigator;
