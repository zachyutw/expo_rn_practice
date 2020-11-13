import React, { useEffect, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';

const styles = StyleSheet.create({
    background: {
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        left: 0,
        alignItems: 'stretch',
        bottom: 0,
        right: 0,
    },
});

export default function LottieBackground({ source }: Props) {
    return (
        <LottieView
            source={source}
            style={styles.background}
            autoPlay
            // loop
        />
    );
}
