import React from 'react';
import { Box, Text } from '../../styles/Theme';
import Button from '../../components/Button/RectButton';
import { AuthNavigationProps } from './index';

const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
    return (
        <Box flex={1} backgroundColor="background">
            <Box
                flex={1}
                backgroundColor="background3"
                alignItems="center"
                justifyContent="flex-end"
                borderBottomLeftRadius="xl"
                borderBottomRightRadius="xl"
            />
            <Box flex={1}>
                <Box
                    backgroundColor="background2"
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                />
                <Box
                    backgroundColor="background"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flex={1}
                    padding="xl"
                >
                    <Text variant="title2">Let’s get started</Text>
                    <Text variant="body" textAlign="center">
                        Login to your account below or signup
                    </Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        label="Join us, it’s Free"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
