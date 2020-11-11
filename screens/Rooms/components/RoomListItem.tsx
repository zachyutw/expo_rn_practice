import React, { useMemo } from 'react';
import { Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18n-js';

import { Room } from '../../../redux/slices/roomSlice';
import { Box, Text } from '../../../components/Basic';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../styles/Theme';
import constants from '../constants';
import PaletteItem from './PaletteItem';

const { roomDetail: Constants } = constants;

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

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('RoomDetail', { item });
            }}
        >
            <Box
                marginHorizontal="m"
                marginVertical="s"
                borderRadius="m"
                borderWidth={1}
                {...rest}
            >
                <Image
                    style={styles.cover}
                    resizeMode="cover"
                    source={{ uri: cover }}
                />

                <Box flex={1} padding="m">
                    <Box flex={1} flexDirection="row" alignItems="center">
                        <SharedElement id={id}>
                            <Text variant="title3">{displayName}</Text>
                        </SharedElement>
                        {Array.from({ length: people / 2 }, (_, i) => (
                            <Box key={i} marginHorizontal="s">
                                <Ionicons
                                    name="ios-bed"
                                    size={theme.spacing.m}
                                />
                            </Box>
                        ))}
                        <Box>
                            <Text>{t(Constants.people, { people })}</Text>
                        </Box>
                    </Box>
                    <Box flex={1} flexDirection="row" marginVertical="s">
                        {colors.map((color) => (
                            <PaletteItem key={color} color={color} />
                        ))}
                    </Box>
                    {/* <Text variant="body" numberOfLines={1}>
                        {description}
                    </Text> */}
                </Box>
            </Box>
        </TouchableWithoutFeedback>
    );
};

export default RoomListItem;
