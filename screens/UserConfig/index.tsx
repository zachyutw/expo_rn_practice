import React, { useEffect } from 'react';
import EditProfile from './EditProfile';
import NotReady from './NotReady';
import { createStackNavigator } from '@react-navigation/stack';
import UserConfig from './UserConfig';
import { fetchCurrentUser } from '../../redux/slices/userSlice';
import { useAppDispatch } from '../../redux/store';

const Stack = createStackNavigator();

const UserConfigStack = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch<any>(fetchCurrentUser());
    }, []);
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="UserConfig" component={UserConfig} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Favorite" component={NotReady} />
            <Stack.Screen name="Notification" component={NotReady} />
        </Stack.Navigator>
    );
};

export default UserConfigStack;
