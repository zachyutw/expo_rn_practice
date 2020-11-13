import React from 'react';
import { t } from 'i18n-js';
import { CommonActions } from '@react-navigation/native';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Box, Text } from '../../styles/Theme';
import Button from '../../components/Button/RectButton';
import { AuthNavigationProps } from './navigation';
import Constants from './constants';

const {
    container,
    welcome: { title1, title3, loginButton, signUpButton },
} = Constants;

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: '95%',
        opacity: 1,
    },
});

const Welcome = ({ navigation }: AuthNavigationProps<'Welcome'>) => {
    const skipToHome = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            })
        );
    };

    return (
        <Box flex={1} backgroundColor="background">
            <Box
                flex={1}
                backgroundColor="background"
                alignItems="center"
                justifyContent="flex-start"
                borderBottomLeftRadius="l"
                borderBottomRightRadius="l"
            >
                <Image
                    style={styles.cover}
                    source={{ uri: 'https://i.imgur.com/MpKMlRA.jpg' }}
                />
            </Box>
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
                    position="relative"
                    backgroundColor="background"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flex={1}
                    padding="xl"
                >
                    <Text variant="title1">{t(title1)}</Text>
                    <Text variant="title3" textAlign="center">
                        {t(title3)}
                    </Text>
                    <Button
                        variant="primary"
                        label={t(loginButton)}
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        label={t(signUpButton)}
                        onPress={() => navigation.navigate('SignUp')}
                    />
                    <TouchableWithoutFeedback onPress={skipToHome}>
                        <Box position="absolute" bottom={30} right={30}>
                            <Text variant="body" color="secondary">
                                {t(container.skip)}
                            </Text>
                        </Box>
                    </TouchableWithoutFeedback>
                </Box>
            </Box>
        </Box>
    );
};

export default Welcome;
