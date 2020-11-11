import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { t } from 'i18n-js';

import { Box, Text } from '../../components/Basic';
import { fetchRoomsThunk } from '../../redux/slices/roomSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import RoomListItem from './components/RoomListItem';

import constants from './constants';

const { room: Constants } = constants;

const Home = ({ navigation }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch<any>(fetchRoomsThunk({}));
    }, []);
    const { entities } = useAppSelector(({ room }) => room);
    return (
        <Box
            flex={1}
            justifyContent="center"
            alignItems="stretch"
            backgroundColor="background"
            paddingTop="xl"
        >
            <Box backgroundColor="secondary">
                <Text variant="title1" padding="s" color="background2">
                    {t(Constants.title1)}
                </Text>
            </Box>
            <ScrollView>
                <Box flex={1}>
                    {entities.map((room) => (
                        <RoomListItem key={room.id} item={room} />
                    ))}
                </Box>
            </ScrollView>
        </Box>
    );
};

export default Home;
