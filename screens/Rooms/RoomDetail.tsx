import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Box, Text } from '../../components/Basic';
import { Room } from '../../redux/slices/roomSlice';
import { SharedElement } from 'react-navigation-shared-element';

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: 300,
    },
});

const RoomDetail = ({ route }) => {
    const { item } = route.params;
    const { cover, displayName, description, id } = item as Room;

    return (
        <Box>
            <SharedElement id={id}>
                <Image
                    style={styles.cover}
                    resizeMode="cover"
                    source={{ uri: cover }}
                />
            </SharedElement>
            <Box padding="m">
                <Text variant="title1">{displayName}</Text>
                <Text variant="body">{description}</Text>
            </Box>
        </Box>
    );
};

export default RoomDetail;
