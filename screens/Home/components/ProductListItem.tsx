import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../../../apis/productsApi';
import { Box, Text } from '../../../components/Basic';

const ProductListItem = ({ item, ...rest }) => {
    const { name, description, image } = item as Product;
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                navigation.navigate('HomeDetail', { item });
            }}
        >
            <Box
                key={name}
                marginHorizontal="m"
                marginVertical="s"
                borderRadius="m"
                borderWidth={1}
                {...rest}
            >
                <SharedElement id={name}>
                    <Image
                        style={{
                            width: '100%',
                            height: 100,
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                        }}
                        resizeMode="cover"
                        source={{ uri: image }}
                    />
                </SharedElement>
                <Box flex={1} padding="m">
                    <Text variant="title3">{`Name:${name}`}</Text>
                    <Text variant="body" numberOfLines={1}>
                        {description}
                    </Text>
                </Box>
            </Box>
        </TouchableWithoutFeedback>
    );
};

export default ProductListItem;
