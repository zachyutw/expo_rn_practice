import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Room from './Room';
import RoomDetail from './RoomDetail';
import { RoomRoutes } from './navigation';

const Stack = createSharedElementStackNavigator<RoomRoutes>();

const RoomStack = () => {
    return (
        <Stack.Navigator initialRouteName="Room">
            <Stack.Screen
                name="Room"
                component={Room}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RoomDetail"
                component={RoomDetail}
                sharedElementsConfig={(route, otherRoute, showing) => {
                    if (otherRoute.name === 'Room' && showing) {
                        const { item } = route.params;
                        const { id } = item;
                        return [{ id, animation: 'fade' }];
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default RoomStack;
