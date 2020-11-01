import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as SplashScreen from 'expo-splash-screen';
import LoadAssets from './components/AppLoading/LoadAssets';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import configureStore from './redux/configureStore';
import { ThemeProvider } from './styles/Theme';
import { theme } from './styles/custom-theme';
import fonts from './styles/fonts';

function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const { store } = configureStore();

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <ThemeProvider>
                <LoadAssets {...{ fonts, assets: [] }}>
                    <SafeAreaProvider>
                        <IconRegistry icons={EvaIconsPack} />
                        <Provider store={store}>
                            <ApplicationProvider {...eva} theme={theme}>
                                <Navigation colorScheme={colorScheme} />
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
