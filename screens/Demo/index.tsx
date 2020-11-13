import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import DrawerContent, { DRAWER_WIDTH } from './components/DrawerContent';
import EditProfile from './EditProfile';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchCurrentUserThunk } from '../../redux/slices/userSlice';

import { useNavigation, CommonActions } from '@react-navigation/native';
import { HomeRoutes } from './navigation';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Box, Text } from '../../components/Basic';
import Header from './components/Header';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const TabADetailsScreen = ({ navigation }) => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="title1"> Welcome to TabA page! </Text>
            <Button
                onPress={() => navigation.navigate('TabA Details')}
                title="Go to TabA Details"
            />
        </Box>
    );
};

const Details = () => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="title2">Tab A Details here!</Text>
        </Box>
    );
};

const TabBScreen = () => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                borderBottomRightRadius="xl"
                backgroundColor="secondary"
            >
                <Header
                    title="Edit Profile"
                    left={{
                        icon: 'menu',
                        onPress: () => {
                            // navigation.dispatch(DrawerActions.openDrawer()),
                        },
                    }}
                    dark
                />
            </Box>
            <Text variant="title2">Welcome to TabB page!</Text>
        </Box>
    );
};

const TabAScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
            <Stack.Screen name="TabA Details" component={Details} />
        </Stack.Navigator>
    );
};

const HomeScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'TabA') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-outline';
                    } else if (route.name === 'TabB') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    }
                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
            }}
        >
            <Tab.Screen name="TabA" component={TabAScreen} />
            <Tab.Screen name="TabB" component={EditProfile} />
        </Tab.Navigator>
    );
};

const HomeDrawerStack = createDrawerNavigator<HomeRoutes>();
const HomeNavigator = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    useEffect(() => {
        dispatch<any>(fetchCurrentUserThunk())
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
            <HomeDrawerStack.Screen name="Test" component={HomeScreen} />
            {/* <HomeDrawerStack.Screen
                name="EditProfile"
                component={EditProfile}
            /> */}
        </HomeDrawerStack.Navigator>
    );
};

export default HomeNavigator;
