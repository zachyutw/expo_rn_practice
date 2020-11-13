import React, { useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Dimensions,
    Animated,
    ScrollView,
} from 'react-native';
import { t } from 'i18n-js';

import { Box, Text } from '../../components/Basic';
import { Room } from '../../redux/slices/roomSlice';
import { SharedElement } from 'react-navigation-shared-element';
import Carousel from 'react-native-snap-carousel';
import PaletteItem from './components/PaletteItem';
import constants from './constants';

const { roomDetail: Constants } = constants;

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    cover: {
        width,
        height: 300,
    },
    image: {
        width: null,
        height: null,
        resizeMode: 'cover',
        flex: 1,
    },
});

const RenderItem = ({ item: uri }) => {
    console.log(uri);
    return <Text>{uri}</Text>;
};

const RoomDetail = ({ route }) => {
    const { item } = route.params;
    const {
        cover,
        displayName,
        description,
        id,
        imageUrls,
        colors,
    } = item as Room;

    const [imageIndex, setImageIndex] = useState(0);

    const animatedValue = new Animated.Value(0);

    return (
        <ScrollView style={{ flex: 1 }}>
            {/* <SharedElement id={id}>
                <Image
                    style={styles.cover}
                    resizeMode="cover"
                    source={{ uri: imageUrls[imageIndex] }}
                />
            </SharedElement> */}

            <Box
                flex={1}
                flexDirection="row"
                justifyContent="center"
                paddingVertical="l"
            >
                {/* {imageUrls.length > 0 && (
                    <Pages
                        horizontal={true}
                        indicatorPosition="bottom"
                        indicatorColor="#FF9100"
                        indicatorOpacity={0.54}
                    >
                        {imageUrls.map((uri, index) => {
                            return (
                                <Image
                                    key={uri}
                                    source={{ uri }}
                                    style={styles.image}
                                />
                            );
                        })}
                    </Pages>
                )} */}

                <Carousel
                    data={imageUrls}
                    layout="stack"
                    layoutCardOffset={50}
                    inactiveSlideOpacity={1}
                    hasParallaxImages={true}
                    renderItem={({ item: uri }) => {
                        console.log(uri);
                        return (
                            <Image
                                key={uri}
                                source={{
                                    uri,
                                }}
                                resizeMode="cover"
                                style={{
                                    borderRadius: 10,
                                    marginHorizontal: 25,
                                    padding: 50,
                                    width: 300,
                                    height: 300,
                                }}
                            />
                        );
                    }}
                    sliderWidth={300}
                    itemWidth={300}
                />
            </Box>

            <Box padding="m">
                <SharedElement id={id}>
                    <Text variant="title1">{displayName}</Text>
                </SharedElement>
                <Text variant="body">{description}</Text>
            </Box>
            <Box
                flex={1}
                flexDirection="row"
                marginVertical="s"
                paddingHorizontal="m"
            >
                {colors.map((color) => (
                    <PaletteItem key={color} color={color} />
                ))}
            </Box>
            <Box flex={1} padding="m">
                <Text marginVertical="l" variant="title3">
                    {t(Constants.houseTitle)}
                </Text>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">
                        {t(Constants.houseRules[0].text)}
                    </Text>
                </Box>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">
                        {t(Constants.houseRules[1].text)}
                    </Text>
                </Box>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">
                        {t(Constants.houseRules[2].text)}
                    </Text>
                </Box>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">
                        {t(Constants.houseRules[3].text)}
                    </Text>
                </Box>

                <Text marginVertical="l" variant="title3">
                    {t(Constants.additionalRule.title)}
                </Text>
                <Text variant="body">{t(Constants.additionalRule.text)}</Text>
            </Box>
        </ScrollView>
    );
};

export default RoomDetail;
