import React, { useEffect } from 'react';
import { Button } from 'react-native';
import { Box, Text } from '../../components/Basic';
import { fetchProductsThunk } from '../../redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const Home = ({ navigation }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch<any>(fetchProductsThunk({}));
    }, []);
    const { entities } = useAppSelector(({ product }) => product);

    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="title1"> Welcome to Home page! </Text>
            <Box flex={1}>
                {entities.map(({ name, description }) => {
                    return (
                        <Box
                            key={name}
                            padding="l"
                            marginVertical="l"
                            borderColor="danger"
                            borderWidth={1}
                        >
                            <Text>{`Name:${name}`}</Text>
                            <Text>{description}</Text>
                        </Box>
                    );
                })}
            </Box>
            <Button
                onPress={() => navigation.navigate('HomeDetail')}
                title="Go to TabA Details"
            />
        </Box>
    );
};

export default Home;
