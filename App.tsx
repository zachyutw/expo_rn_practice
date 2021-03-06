import { StatusBar } from 'expo-status-bar';
import * as Localization from 'expo-localization';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import i18n from 'i18n-js';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as SplashScreen from 'expo-splash-screen';
import LoadAssets from './src/components/AppLoading/LoadAssets';
import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import store from './src/redux/store';
import { ThemeProvider } from './src/styles/Theme';
import { theme } from './src/styles/custom-theme';
import fonts from './src/styles/fonts';

import enLocale from './src/localization/en';
import zhTwLocale from './src/localization/zhTw';
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';

i18n.translations = {
    en: enLocale,
    'zh-Hant-TW': zhTwLocale,
    'zh-TW': zhTwLocale,
    'zh-Hant': zhTwLocale,
    zh: zhTwLocale,
};

i18n.locale = Localization.locale;
i18n.fallbacks = true;

console.log(Localization.locale);

const firebaseConfig = {
    apiKey: 'AIzaSyBA9nJM9wFmKMSEK_n4DFS8zfbGXHhsZZQ',
    authDomain: 'zy-dev-proejct.firebaseapp.com',
    databaseURL: 'https://zy-dev-proejct.firebaseio.com',
    projectId: 'zy-dev-proejct',
    storageBucket: 'zy-dev-proejct.appspot.com',
    messagingSenderId: '703388529345',
    appId: '1:703388529345:web:973498fce4c0b25f239a40',
    measurementId: 'G-HBB6S4XJ2W',
};

if (!firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (err) {
        // firebase.initializeApp(firebaseConfig);

        firebase.app().delete();
        console.log(err);
        // firebase.initializeApp(firebaseConfig);
    }
} else {
    firebase.app();
}

console.log(Constants.manifest.extra, 'extra env variables ');

SplashScreen.preventAutoHideAsync().catch(() => {});

function App() {
    const [initializing, setInitializing] = useState(true);
    const isLoadingComplete = useCachedResources();

    useEffect(() => {
        async function init() {
            try {
                setInitializing(false);
                await SplashScreen.hideAsync();
            } catch (err) {
                // do nothing on error
            }
        }
        init();
    }, []);

    if (!isLoadingComplete || initializing) {
        return null;
    } else {
        return (
            <ThemeProvider>
                <LoadAssets {...{ fonts, assets: [] }}>
                    <SafeAreaProvider>
                        <IconRegistry icons={EvaIconsPack} />
                        <Provider store={store}>
                            <ApplicationProvider {...eva} theme={theme}>
                                <Navigation />
                                <StatusBar />
                            </ApplicationProvider>
                        </Provider>
                    </SafeAreaProvider>
                </LoadAssets>
            </ThemeProvider>
        );
    }
}

const STORYBOOK_START = false;
export default STORYBOOK_START ? require('./storybook').default : App;
