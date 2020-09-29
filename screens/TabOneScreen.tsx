import * as React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import { LoremIpsum } from 'lorem-ipsum';
import EditScreenInfo from '../components/EditScreenInfo';
import { View, SafeAreaView } from '../components/Themed';

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

export default function TabOneScreen() {
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
                {PAGE_TITLE}
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

            <Layout style={styles.button}>
                <Button onPress={() => console.log('123')}>BUTTON</Button>
            </Layout>
            {/* <EditScreenInfo path="/screens/TabOneScreen.js" /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue',
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
});
