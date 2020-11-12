import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import {
    useNavigation,
    CommonActions,
    DrawerActions,
} from '@react-navigation/native';
import { Box, Text } from '../../components/Basic';
import { useTheme } from '../../styles/Theme';
import DrawerItem, { DrawerItemProps } from './components/DrawerItem';
import Container from './components/Container';
import Header from './components/Header';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import { signOut } from '../../redux/slices/authorizationSlice';
import Spinner from '../../components/AppLoading/Spinner';
const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
    {
        id: 'favorites',
        icon: 'heart',
        label: 'Favorites',
        screen: 'Favorite',
        color: 'drawer1',
        role: 'user',
    },
    {
        id: 'editProfile',
        icon: 'user',
        label: 'Edit Profile',
        screen: 'EditProfile',
        color: 'drawer2',
        role: 'user',
    },
    {
        id: 'notificationSettings',
        icon: 'settings',
        label: 'Notifications Settings',
        screen: 'Notification',
        color: 'drawer4',
        role: 'user',
    },
    {
        id: 'logout',
        icon: 'log-out',
        label: 'Logout',
        color: 'secondary',
        role: 'user',
        onPress: (navigation, dispatch) => {
            // navigation.dispatch(
            //     CommonActions.reset({
            //         index: 0,
            //         routes: [{ name: 'Authorization' }],
            //     })
            // );

            // TODO firebase signOut error
            dispatch<any>(signOut())
                .then(unwrapResult)
                .then(() => {
                    console.log('log out');
                    navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{ name: 'Authorization' }],
                        })
                    );
                })
                .catch((err) => console.log(err));
        },
    },
    {
        id: 'Login/SignUp',
        icon: 'log-in',
        label: 'Login/SignUp',
        onPress: (navigation) => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Authorization' }],
                })
            );
        },
        color: 'drawer4',
        role: null,
    },
];

const UserConfig = () => {
    const theme = useTheme();
    const { data, loading } = useAppSelector(({ user }) => user);
    const { uid, photoURL, displayName } = data;
    return (
        <Container>
            <Box flex={1} backgroundColor="secondary" />
            {loading === 'pending' ? (
                <Spinner />
            ) : (
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    flex={1}
                    // alignItems="center"
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    justifyContent="flex-start"
                    padding="xl"
                >
                    {uid && (
                        <>
                            <Box
                                position="absolute"
                                right={50}
                                top={-50}
                                backgroundColor="background4"
                                width={100}
                                height={100}
                                flex={1}
                                justifyContent="center"
                                alignItems="center"
                                style={{ borderRadius: 50 }}
                            >
                                <Image
                                    source={{ uri: photoURL }}
                                    style={{
                                        width: 90,
                                        height: 90,
                                        borderRadius: theme.borderRadii.xl,
                                    }}
                                />
                            </Box>
                            <Box marginVertical="m">
                                <Text
                                    variant="title1"
                                    color="text"
                                    textAlign="center"
                                >
                                    {displayName || 'Default User'}
                                </Text>
                            </Box>
                        </>
                    )}
                    <Box flex={1}>
                        {items
                            .filter(({ role }) => {
                                if (uid) {
                                    if (role === 'user') {
                                        return true;
                                    } else {
                                        return false;
                                    }
                                } else {
                                    if (role === 'user') {
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }
                            })
                            .map((item) => (
                                <DrawerItem key={item.icon} {...item} />
                            ))}
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default UserConfig;
