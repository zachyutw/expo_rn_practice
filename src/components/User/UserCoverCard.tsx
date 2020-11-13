import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        paddingBottom: 30,
        backgroundColor: 'transparent',
        width: 450,
        maxWidth: '85%',
    },
    card: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        borderRadius: 10,
        backgroundColor: 'orange',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    imageBackground: {
        position: 'absolute',
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        left: 0,
        bottom: 0,
        height: 450,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    cardMeta: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        // height: 50,
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    cardInfo: {
        position: 'relative',
        padding: 14,
        width: '90%',
        backgroundColor: '#FFF',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardInfoHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowFlexStart: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rowFlexEnd: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        paddingHorizontal: 5,
    },
});

const UserCoverCard = () => {
    return (
        <Layout style={styles.wrapper}>
            <Layout style={styles.card}>
                <Image
                    source={{
                        uri: 'https://loremflickr.com/1000/1000/model',
                    }}
                    style={styles.imageBackground}
                ></Image>
            </Layout>
            <Layout style={styles.cardMeta}>
                <Layout style={styles.cardInfo}>
                    <Layout style={styles.cardInfoHeader}>
                        <Layout style={styles.rowFlexStart}>
                            <Text>Tina Omg</Text>
                            <Ionicons
                                style={styles.icon}
                                name="ios-female"
                                size={14}
                                color="red"
                            />
                        </Layout>
                        <Layout style={styles.rowFlexEnd}>
                            <Text>5.3k</Text>
                        </Layout>
                    </Layout>
                    <Text style={{ backgroundColor: '#FFF' }}>323</Text>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default UserCoverCard;
