import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: 400,
        borderRadius: 10,
        backgroundColor: 'orange',
    },
});

const MatchUserCard = () => {
    return (
        <Layout style={styles.wrapper}>
            <Text>123</Text>
        </Layout>
    );
};

export default MatchUserCard;
