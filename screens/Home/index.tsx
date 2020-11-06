import React, { useEffect } from 'react';
import { RouteProp } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import DrawerContent, { DRAWER_WIDTH } from './components/DrawerContent';
import EditProfile from './EditProfile';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchCurrentUser } from '../../redux/slices/userSlice';

import { useNavigation, CommonActions } from '@react-navigation/native';
import { HomeRoutes } from './navigation';

const HomeDrawerStack = createDrawerNavigator<HomeRoutes>();

const HomeNavigator = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    useEffect(() => {
        dispatch<any>(fetchCurrentUser())
            .then(unwrapResult)
            .catch((err) => {
                if (
                    err.message ===
                    `null is not an object (evaluating '_await$firebase$auth$.displayName')`
                ) {
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Authorization' }],
                        })
                    );
                    console.log('no user');
                } else {
                    console.log(err);
                }
            });
    }, []);

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
