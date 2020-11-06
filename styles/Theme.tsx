import React, { ReactNode } from 'react';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import {
    ThemeProvider as ReStyleThemeProvider,
    createText,
    createBox,
    useTheme as useReTheme,
} from '@shopify/restyle';

export const palette = {
    green: '#134C5E',
    white: 'white',
    orange: '#FF7449',
    yellow: '#FCE220',
    pink: '#FF87A2',
    violet: '#442CB9',
    lightBlue: '#BFEAF5',
    success: '#0A5B4C',
    blue: '#1E5BC6',
    text: '#5799ED',
    blue100: '#D2EEFE',
    black: 'rgb(0,0,0)',
    red: '#FD0202',
    darkBlue: '#002554',
    transparentBlue100: 'rgba(32, 128, 247, 0.08)',
};

const theme = {
    colors: {
        primary: palette.blue,
        primaryLight: '#E7F9F7',
        secondary: palette.darkBlue,
        danger: palette.red,
        info: '#808080',
        text: palette.black,
        textContrast: palette.white,
        background: palette.white,
        background2: '#F4F0EF',
        background3: palette.blue,
        background4: palette.blue100,
        backgroundSpinner: palette.transparentBlue100,
        graph1: palette.orange,
        graph2: palette.yellow,
        drawer1: palette.orange,
        drawer2: palette.yellow,
        drawer3: palette.pink,
        drawer4: palette.violet,
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75,
    },

    textVariants: {
        hero: {
            fontSize: 80,
            lineHeight: 80,
            fontFamily: 'SFProDisplay-Bold',
            color: 'background',
            textAlign: 'center',
        },
        title1: {
            fontSize: 28,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'secondary',
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'secondary',
        },
        title3: {
            fontSize: 16,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'secondary',
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'SFProDisplay-Regular',
            color: 'text',
        },
        button: {
            fontSize: 15,
            fontFamily: 'SFProDisplay-Medium',
            color: 'text',
            textAlign: 'center',
        },
        header: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'secondary',
        },
        danger: {
            fontSize: 12,
            lineHeight: 24,
            fontFamily: 'SFProDisplay-Semibold',
            color: 'danger',
        },
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
    <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};
