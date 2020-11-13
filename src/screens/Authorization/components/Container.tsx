import React, { ReactNode } from 'react';
import { Dimensions, Platform, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants';
import { useNavigation, CommonActions } from '@react-navigation/native';

import { Box, Text } from '../../../components/Basic';
import constants from '../constants';
const { height: wHeight } = Dimensions.get('window');

const { container } = constants;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattern: 0 | 1 | 2;
}

const Container = ({ children, footer }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box
                flex={1}
                paddingTop="xl"
                paddingBottom="m"
                height={
                    wHeight +
                    (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
                }
                backgroundColor="primary"
            >
                <Box flex={1} overflow="hidden">
                    <Box
                        borderRadius="l"
                        backgroundColor="background"
                        flex={1}
                        justifyContent="center"
                        padding="xl"
                        marginHorizontal="m"
                    >
                        {children}
                    </Box>
                </Box>
                <Box backgroundColor="primary" padding="m">
                    {footer}
                    <Box height={insets.bottom} />
                </Box>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.dispatch(
                            CommonActions.reset({
                                index: 0,
                                routes: [{ name: 'Home' }],
                            })
                        );
                    }}
                >
                    <Box flex={0.05} alignItems="flex-end" padding="m">
                        <Text fontSize={20} color="background4">
                            {container.skip}
                        </Text>
                    </Box>
                </TouchableWithoutFeedback>
            </Box>
        </KeyboardAwareScrollView>
    );
};

export default Container;
