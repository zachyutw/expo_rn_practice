import React from 'react';
import { Button } from 'react-native';
import { Box, Text } from '../../components/Basic';
const Home = ({ navigation }) => {
    return (
        <Box flex={1} justifyContent="center" alignItems="center">
            <Text variant="title1"> Welcome to Home page! </Text>
            <Button
                onPress={() => navigation.navigate('TabA Details')}
                title="Go to TabA Details"
            />
        </Box>
    );
};

export default Home;
