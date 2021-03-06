import { DrawerActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { Dimensions, Image, TouchableOpacity, Platform } from 'react-native';

import { Box, Text } from '../../components/Basic';
import { useTheme } from '../../styles/Theme';
import Header from './components/Header';
import { updateAvatarThunk } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import PersonalInfo from './components/PersonalInfo';
import Spinner from '../../components/AppLoading/Spinner';
import { HomeNavigationProps } from './navigation';

// import firebase from 'firebase';
const { width } = Dimensions.get('window');

const EditProfile = ({ navigation }: HomeNavigationProps<'EditProfile'>) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const user = useAppSelector(({ user }) => ({ ...user.data }));
    const loading = useAppSelector(({ user }) => user.loading);
    const { email, photoURL, emailVerified, displayName } = user;

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {
                    status,
                } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status !== 'granted') {
                    alert(
                        'Sorry, we need camera roll permissions to make this work!'
                    );
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result: any = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.1,
        });

        if (!result.cancelled) {
            // console.log(result);
            const manipResult = await ImageManipulator.manipulateAsync(
                result.uri,
                [
                    {
                        resize: {
                            height: 300,
                            width: 400,
                        },
                    },
                ],
                { compress: 0.8, format: ImageManipulator.SaveFormat.PNG }
            );

            dispatch<any>(updateAvatarThunk(manipResult));
        }
    };
    return (
        <Box flex={1} backgroundColor="background">
            <Box flex={0.3} backgroundColor="background">
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
                            icon: 'arrow-left',
                            onPress: () => navigation.goBack(),
                        }}
                        dark
                    />
                </Box>
            </Box>
            <Box>
                <Box
                    position="absolute"
                    right={width / 2 - 50}
                    top={-50}
                    backgroundColor="background4"
                    width={100}
                    height={100}
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    style={{ borderRadius: 50 }}
                >
                    <TouchableOpacity onPress={pickImage}>
                        <Image
                            source={{ uri: photoURL }}
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: theme.borderRadii.xl,
                            }}
                        />
                    </TouchableOpacity>
                </Box>
                <Box
                    marginVertical="m"
                    style={{ marginTop: 50 + theme.spacing.m }}
                >
                    <Text variant="title1" textAlign="center">
                        {displayName || 'Default User'}
                    </Text>
                    <Text variant="body" textAlign="center">
                        {email}
                    </Text>
                </Box>
            </Box>
            <Box flex={1}>
                <PersonalInfo />
            </Box>
            {loading === 'pending' && <Spinner />}
        </Box>
    );
};

export default EditProfile;
