import React from 'react';
import { Dimensions, Image, TouchableOpacity } from 'react-native';
import {
    DrawerActions,
    useNavigation,
    CommonActions,
} from '@react-navigation/native';
import { Box, Text } from '../../../components/Basic';
import { useTheme } from '../../../styles/Theme';
// import { Box, useTheme, Text, Header } from "../../components";
import Header from './Header';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { unwrapResult } from '@reduxjs/toolkit';
import * as ImagePicker from 'expo-image-picker';
import { signOut } from '../../../redux/slices/authorizationSlice';
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
        id: 'transactionHistory',
        icon: 'clock',
        label: 'Transaction History',
        screen: 'TransactionHistory',
        color: 'drawer3',
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

const DrawerContent = () => {
    const navigation = useNavigation();
    const theme = useTheme();
    const user = useAppSelector(({ user }) => user.data);
    const { email, photoURL, emailVerified, displayName } = user;

    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="background">
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
                        title="Menu"
                        left={{
                            icon: 'x',
                            onPress: () =>
                                navigation.dispatch(
                                    DrawerActions.closeDrawer()
                                ),
                        }}
                        right={{ icon: 'shopping-bag', onPress: () => true }}
                        dark
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor="secondary" />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    justifyContent="center"
                    padding="xl"
                >
                    {/* <Box
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
                    </Box> */}
                    {/* <Box marginVertical="m">
                        <Text variant="title1" color="text" textAlign="center">
                            {displayName || 'Default User'}
                        </Text>
                        <Text variant="body" textAlign="center">
                            {email}
                        </Text>
                    </Box> */}
                    {items.map((item) => (
                        <DrawerItem key={item.icon} {...item} />
                    ))}
                </Box>
            </Box>
            <Box
                backgroundColor="secondary"
                width={DRAWER_WIDTH}
                overflow="hidden"
                height={height * 0.61}
            />
        </Box>
    );
};

export default DrawerContent;
