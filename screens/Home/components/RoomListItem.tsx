import React, { useMemo } from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import { Room } from '../../../redux/slices/roomSlice';
import { Box, Text } from '../../../components/Basic';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../styles/Theme';

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
});

const RoomListItem = ({ item, ...rest }) => {
    const {
        id,
        description,
        cover,
        displayName,
        people,
        colors,
    } = item as Room;
    const navigation = useNavigation();

    const beds = useMemo(() => {
        for (let i = 0; i < people; i = i + 2) {}
    }, [people]);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('HomeDetail', { item });
            }}
        >
            <Box
                marginHorizontal="m"
                marginVertical="s"
                borderRadius="m"
                borderWidth={1}
                {...rest}
            >
                <SharedElement id={id}>
                    <Image
                        style={styles.cover}
                        resizeMode="cover"
                        source={{ uri: cover }}
                    />
                </SharedElement>
                <Box flex={1} padding="m">
                    <Box flex={1} flexDirection="row" alignItems="center">
                        <Text variant="title3">{displayName}</Text>
                        {Array.from({ length: people / 2 }, (_, i) => (
                            <Box key={i} marginHorizontal="s">
                                <Ionicons
                                    name="ios-bed"
                                    size={theme.spacing.m}
                                />
                            </Box>
                        ))}
                    </Box>
                    <Box flex={1} flexDirection="row" marginVertical="s">
                        {colors.map((color) => (
                            <Box
                                key={color}
                                padding="s"
                                marginHorizontal="s"
                                style={{ backgroundColor: color }}
                                width={25}
                                height={25}
                                borderRadius="xl"
                            />
                        ))}
                    </Box>
                    <Text variant="body" numberOfLines={1}>
                        {description}
                    </Text>
                </Box>
            </Box>
        </TouchableWithoutFeedback>
    );
};

export default RoomListItem;
