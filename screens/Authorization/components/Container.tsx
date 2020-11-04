import React, { ReactNode } from 'react';
import { Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants';
import Box from '../../../components/Basic/Box';

const { height: wHeight } = Dimensions.get('window');

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
    const insets = useSafeAreaInsets();
    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box
                height={
                    wHeight +
                    (Platform.OS === 'android' ? Constants.statusBarHeight : 0)
                }
                backgroundColor="secondary"
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
                <Box backgroundColor="secondary" paddingTop="m">
                    {footer}
                    <Box height={insets.bottom} />
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    );
};

export default Container;
