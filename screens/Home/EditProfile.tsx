import { DrawerActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Dimensions, Image, TouchableOpacity, Platform } from 'react-native';
import { Box, Text } from '../../components/Basic';
import { useTheme } from '../../styles/Theme';
import Header from './components/Header';

import { fetchCurrentUser } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import PersonalInfo from './components/PersonalInfo';
import firebase from 'firebase';
const { width } = Dimensions.get('window');

const assets = [
    {
        uri: 'https://loremflickr.com/1000/1000/model',
    },
];

interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
}

const EditProfile = ({ navigation }: HomeNavigationProps<'EditProfile'>) => {
    const theme = useTheme();
    const [image, setImage] = useState('');
    // const [user, setUser] = useState({
    //     email: '',
    //     photoURL: null,
    //     emailVerified: false,
    //     displayName: null,
    // });
    const dispatch = useAppDispatch();
    const user = useAppSelector(({ user }) => user.data);
    const { email, photoURL, emailVerified, displayName } = user;
    useEffect(() => {
        dispatch<any>(fetchCurrentUser());
    }, []);

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

            // const auth = await firebase.auth();

            // if (auth) {
            //     auth.sendPasswordResetEmail('zachyu.tw@gmail.com').then(() =>
            //         console.log('mail sent')
            //     );
            // }
        })();
    }, []);

    const pickImage = async () => {
        // let result = await ImagePicker.launchImageLibraryAsync({
        //     // mediaTypes: ImagePicker.MediaTypeOptions.All,
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     // quality: 1,
        // });
        // // console.log(result);
        // if (!result.cancelled) {
        //     // dispatch<any>(updateAvatar(result));
        //     setImage(result.uri);
        // }
    };
    return (
        <Box flex={1} backgroundColor="background">
            <Box flex={0.25} backgroundColor="background">
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
                            onPress: () =>
                                navigation.dispatch(DrawerActions.openDrawer()),
                        }}
                        dark
                    />
                </Box>
            </Box>
            <Box>
                <Box
                    position="absolute"
                    left={width / 2 - 50}
                    top={-50}
                    backgroundColor="background4"
                    width={100}
                    height={100}
                    flex={1}
                    justifyContent="center"
                    alignItems="center"
                    style={{ borderRadius: 50 }}
                >
                    {/* <TouchableOpacity onPress={pickImage}>
                        <Image
                            source={assets[0]}
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: theme.borderRadii.xl,
                            }}
                        />
                    </TouchableOpacity> */}
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
        </Box>
    );
};

export default EditProfile;