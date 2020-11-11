import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import HomeDetail from './HomeDetail';
import { HomeRoutes, HomeStackRoutes } from './navigation';
import UserConfigStack from '../UserConfig';
import RoomStack from '../Rooms';
import { theme } from '../../styles/Theme';

const Tab = createBottomTabNavigator<HomeStackRoutes>();
const Stack = createSharedElementStackNavigator<HomeRoutes>();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                name="HomeDetail"
                component={HomeDetail}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    if (otherRoute.name === 'Home' && showing) {
                        const { item } = route.params;
                        const { id } = item;
                        return [{ id, animation: 'fade' }];
                    }
                }}
            />
        </Stack.Navigator>
    );
};

const HomeNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeStack') {
                        iconName = focused ? 'ios-home' : 'ios-home';
                    } else if (route.name === 'UserConfig') {
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                    } else if (route.name === 'RoomStack') {
                        iconName = focused ? 'ios-bed' : 'md-bed';
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
            tabBarOptions={{
                style: { backgroundColor: theme.colors.secondary },
                keyboardHidesTabBar: true,
                activeTintColor: 'white',
                inactiveTintColor: 'grey',
            }}
            initialRouteName="HomeStack"
        >
            <Tab.Screen name="RoomStack" component={RoomStack} />
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="UserConfig" component={UserConfigStack} />
        </Tab.Navigator>
    );
};

export default HomeNavigator;
