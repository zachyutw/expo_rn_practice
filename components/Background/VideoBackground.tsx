import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
import { Video } from 'expo-av';

const styles = StyleSheet.create({
    backgroundVideo: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'stretch',
        bottom: 0,
        right: 0,
    },
});

export default function VideoBackground({ source }: Props) {
    return (
        <Video
            source={source}
            style={styles.backgroundVideo}
            resizeMode={'cover'}
            rate={1.0}
            shouldPlay
            isLooping
            isMuted
        />
    );
}
