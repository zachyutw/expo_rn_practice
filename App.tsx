import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as SplashScreen from 'expo-splash-screen';
import LoadAssets from './components/AppLoading/LoadAssets';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import store from './redux/store';
import { ThemeProvider } from './styles/Theme';
import { theme } from './styles/custom-theme';
import fonts from './styles/fonts';

import Constants from 'expo-constants';

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
