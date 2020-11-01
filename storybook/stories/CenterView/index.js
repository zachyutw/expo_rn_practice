import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import style from './style';
import { theme } from '../../../styles/custom-theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CenterView({ children }) {
    return (
        <SafeAreaProvider>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={theme}>
                <View style={style.main}>{children}</View>
            </ApplicationProvider>
        </SafeAreaProvider>
    );
}

CenterView.defaultProps = {
    children: null,
};

CenterView.propTypes = {
    children: PropTypes.node,
};
