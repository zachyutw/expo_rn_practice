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
// import { signOut } from '../../../redux/slices/authorizationSlice';
export const assets = [
    {
        uri: 'https://loremflickr.com/1000/1000/model',
    },
];
const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;
const items: DrawerItemProps[] = [
    {
        id: 'favorites',
        icon: 'heart',
        label: 'Favorites',
        screen: 'FavoriteOutfits',
        color: 'drawer1',
    },
    {
        id: 'editProfile',
        icon: 'user',
        label: 'Edit Profile',
        screen: 'EditProfile',
        color: 'drawer2',
    },
    {
        id: 'notificationSettings',
        icon: 'settings',
        label: 'Notifications Settings',
        screen: 'FavoriteOutfits',
        color: 'drawer4',
    },
    {
        id: 'logout',
        icon: 'log-out',
        label: 'Logout',
        color: 'secondary',
        onPress: (navigation, dispatch) => {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'Authorization' }],
                })
            );

            // TODO firebase signOut error
            // dispatch<any>(signOut())
            //     .then(unwrapResult)
            //     .then(() => {
            //         console.log('log out');
            //         navigation.dispatch(
            //             CommonActions.reset({
            //                 index: 0,
            //                 routes: [{ name: 'Authorization' }],
            //             })
            //         );
            //     })
            //     .catch((err) => console.log(err));
        },
    },
];

const UserConfig = () => {
    const navigation = useNavigation();
    const theme = useTheme();
    const user = useAppSelector(({ user }) => user.data);
    const { email, photoURL, emailVerified, displayName } = user;

    return (
        <Container>
            <Box flex={1} backgroundColor="secondary" />
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
                justifyContent="center"
                padding="xl"
            >
                <Box
                    position="absolute"
                    left={DRAWER_WIDTH / 2 - 50}
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
                        source={assets[0]}
                        style={{
                            width: 90,
                            height: 90,
                            borderRadius: theme.borderRadii.xl,
                        }}
                    />
                </Box>
                <Box marginVertical="m">
                    <Text variant="title1" color="text" textAlign="center">
                        {displayName || 'Default User'}
                    </Text>
                    <Text variant="body" textAlign="center">
                        {email}
                    </Text>
                </Box>
                {items.map((item) => (
                    <DrawerItem key={item.icon} {...item} />
                ))}
            </Box>
        </Container>
    );
};

export default UserConfig;