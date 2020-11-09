import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box, Text } from '../../components/Basic';
import { fetchRoomsThunk } from '../../redux/slices/roomSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import RoomListItem from './components/RoomListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
const Home = ({ navigation }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch<any>(fetchRoomsThunk({}));
    }, []);
    const { entities } = useAppSelector(({ room }) => room);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Box flex={1} justifyContent="center" alignItems="center">
                <Text variant="title1" padding="s">
                    Five Fancy bedrooms
                </Text>
                <ScrollView>
                    <Box flex={1}>
                        {entities.map((room) => (
                            <RoomListItem key={room.id} item={room} />
                        ))}
                    </Box>
                </ScrollView>
            </Box>
        </SafeAreaView>
    );
};

export default Home;
