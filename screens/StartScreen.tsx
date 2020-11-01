import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Button, useTheme, Text, Layout } from '@ui-kitten/components';
import LottieBackground from '../components/Background/LottieBackground';
import UserCoverCard from '../components/User/UserCoverCard';
import getProducts from '../apis/productsApi';
import { increment, decrement } from '../redux/slices/counterSlice';
import { fetchProducts } from '../redux/slices/productSlice';
import { useSelector, useDispatch } from 'react-redux';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',

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
export default function StartScreen({ navigation }: any) {
    // const {} = useDeviceOrientation();
    const theme = useTheme();
    const dispatch = useDispatch();
    const counter = useSelector(({ counter }) => counter);
    const productState = useSelector(({ product }) => product);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [counter]);
    console.log(productState);
    return (
        <Layout
            style={[
                styles.screen,
                { backgroundColor: theme['color-primary-default'] },
            ]}
        >
            {/* <VideoBackground source={require('../assets/videos/video1.mp4')} /> */}
            <LottieBackground
                source={require('../assets/lotties/lottie1.json')}
            />

            <Text style={styles.titleText}>Welcome</Text>
            <UserCoverCard />
            <Button
                style={[styles.getStartButton]}
                onPress={() => navigation.navigate('Authorization')}
            >
                {GET_STARTED}
            </Button>
            <Button
                style={[styles.getStartButton]}
                onPress={() => dispatch(increment())}
            >
                {'increase'}
            </Button>
            <Button
                style={[styles.getStartButton]}
                onPress={() => dispatch(decrement())}
            >
                {'decrement'}
            </Button>
        </Layout>
    );
}
