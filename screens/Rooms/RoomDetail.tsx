import React, { useRef, useState } from 'react';
import {
    Image,
    StyleSheet,
    View,
    Dimensions,
    Animated,
    ScrollView,
} from 'react-native';
import { Box, Text } from '../../components/Basic';
import { Room } from '../../redux/slices/roomSlice';
import { SharedElement } from 'react-navigation-shared-element';
import Carousel from 'react-native-snap-carousel';
import PaletteItem from './components/PaletteItem';

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
                    House Rules
                </Text>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">Check-in: After 5:00 PM</Text>
                </Box>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">Checkout: 12:00 PM</Text>
                </Box>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">No smoking</Text>
                </Box>
                <Box flex={1} flexDirection="row" alignItems="center">
                    <Text variant="body">@</Text>
                    <Text variant="body">No pets</Text>
                </Box>

                <Text marginVertical="l" variant="title3">
                    Additional rules
                </Text>
                <Text>
                    屋內各個傢俱、電器用品請勿任意移動攜出，用畢的廚具需要清潔，屋內需脫鞋，有提供室內/外拖鞋，屋內禁止吸菸，若要吸菸請到庭院外或戶外陽台。
                </Text>
            </Box>
        </ScrollView>
    );
};

export default RoomDetail;
