import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Layout, Input } from '@ui-kitten/components';
import { LoremIpsum } from 'lorem-ipsum';
import EditScreenInfo from '../components/EditScreenInfo';
import { View, SafeAreaView } from '../components/Themed';
import SignUpForm from '../features/Authorization/SignUpForm';
import SignInForm from '../features/Authorization/SignInForm';
import FindPasswordByEmailForm from '../features/Authorization/FindPasswordByEmailForm';
import FindPasswordByPhoneForm from '../features/Authorization/FindPasswordByPhoneForm';
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

const PAGE_TITLE = lorem.generateSentences(3);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        // backgroundColor: 'dodgerblue',
        color: '#fff',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 50,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    signUpForm: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    input: {
        flex: 1,
        flexBasis: '80%',
        flexGrow: 1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 14,
        marginBottom: 14,
    },
});

export default function AuthorizationScreen() {
    const onSignUpSubmit = (data: any) => {
        console.log(data, '123');
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={styles.titleText}
                selectable
                selectionColor="red"
                // numberOfLines={1}
                // ellipsizeMode="tail"
                textBreakStrategy="balanced"
            >
                Auth Page
                {/* abc@test.com */}
            </Text>
            <TouchableOpacity onPress={() => console.log('image')}>
                <Image
                    loadingIndicatorSource={require('../assets/images/icon.png')}
                    fadeDuration={1000}
                    blurRadius={1}
                    resizeMode="cover"
                    source={{
                        width: 200,
                        height: 200,
                        uri: 'https://picsum.photos/200/300',
                    }}
                />
            </TouchableOpacity>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <FindPasswordByPhoneForm onSubmit={onSignUpSubmit} />

            {/* <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
        </SafeAreaView>
    );
}
