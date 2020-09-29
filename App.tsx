import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { Provider } from 'react-redux';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { PersistGate } from 'redux-persist/integration/react';
import * as SplashScreen from 'expo-splash-screen';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import configureStore from './redux/configureStore';

import { theme } from './styles/custom-theme';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    const { store, persistor } = configureStore();

    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
    }, []);

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <IconRegistry icons={EvaIconsPack} />
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <ApplicationProvider {...eva} theme={theme}>
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar />
                        </ApplicationProvider>
                    </PersistGate>
                </Provider>
            </SafeAreaProvider>
        );
    }
}
