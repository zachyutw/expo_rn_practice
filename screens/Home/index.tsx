import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import DrawerContent, { DRAWER_WIDTH } from './components/DrawerContent';
import EditProfile from './EditProfile';

export const assets = [
    {
        uri: 'https://loremflickr.com/1000/1000/model',
    },
];

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

const HomeDrawerStack = createDrawerNavigator<HomeRoutes>();
// todo ForgotPassword, PasswordChanged
const HomeNavigator = () => {
    return (
        <HomeDrawerStack.Navigator
            drawerContent={() => <DrawerContent />}
            drawerStyle={{ width: DRAWER_WIDTH }}
        >
            <HomeDrawerStack.Screen
                name="EditProfile"
                component={EditProfile}
            />
        </HomeDrawerStack.Navigator>
    );
};

export default HomeNavigator;
