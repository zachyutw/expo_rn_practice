import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18n-js';

import { Box, Text } from '../../components/Basic';
import Header from './components/Header';
import constants from './constants';

const { notReady: Constants } = constants;

const NotReady = () => {
    const navigation = useNavigation();
    return (
        <Box flex={1} backgroundColor="background">
            <Box flex={0.3} backgroundColor="background">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    borderBottomRightRadius="xl"
                    backgroundColor="secondary"
                >
                    <Header
                        title="Not Ready"
                        left={{
                            icon: 'arrow-left',
                            onPress: () => navigation.goBack(),
                        }}
                        dark
                    />
                </Box>
            </Box>
            <Box flex={1}>
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    flex={1}
                    // alignItems="center"
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    justifyContent="space-between"
                    padding="xl"
                >
                    <Text variant="hero" color="background2">
                        {t(Constants.hero)}
                    </Text>
                    <Text
                        textAlign="right"
                        variant="title1"
                        color="background2"
                    >
                        {t(Constants.title1)}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default NotReady;
