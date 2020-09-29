import React, { useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Button, useTheme, Text } from '@ui-kitten/components';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
// import { Text } from '../components/Themed';
import { useDeviceOrientation } from '@react-native-community/hooks';
import LottieBackground from '../components/Background/LottieBackground';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#66c5b8',
        paddingBottom: 100,
        paddingTop: 100,
        color: '#fff',
    },
    backgroundVideo: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'stretch',
        bottom: 0,
        right: 0,
    },
    getStartButton: {
        borderRadius: 20,
        width: '50%',
    },
    titleText: {
        color: '#FFF',
        fontWeight: '900',
        fontSize: 30,
    },
});

const start = {
    GET_STARTED: 'GET STARTED',
};
const { GET_STARTED } = start;
export default function StartScreen({ navigation }: Props) {
    // const {} = useDeviceOrientation();
    const theme = useTheme();
    useEffect(() => {}, []);
    return (
        <View
            style={[
                styles.screen,
                { backgroundColor: theme['color-primary-default'] },
            ]}
        >
            {/* <VideoBackground source={require('../assets/videos/video1.mp4')} /> */}
            <LottieBackground
                source={require('../assets/lotties/lottie1.json')}
            />
            <View>
                <Text style={styles.titleText}>Welcome</Text>
            </View>
            <Button
                style={[styles.getStartButton]}
                onPress={() => navigation.replace('Root')}
            >
                {GET_STARTED}
            </Button>
        </View>
    );
}
