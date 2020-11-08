import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Box, Text } from '../../components/Basic';
import Header from './components/Header';
import Home from './Home';
import HomeDetail from './HomeDetail';
import { HomeRoutes, HomeStackRoutes } from './navigation';
import UserConfigStack from '../UserConfig';
const Tab = createBottomTabNavigator<HomeStackRoutes>();
const Stack = createStackNavigator<HomeRoutes>();

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

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HomeDetail" component={HomeDetail} />
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
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'UserConfig') {
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
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="UserConfig" component={UserConfigStack} />
        </Tab.Navigator>
    );
};

export default HomeNavigator;
