import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Box, Text } from '../../../components/Basic';
import RoundedIcon from '../../../components/Icon/RoundedIcon';
import { HomeRoutes } from '../navigation';
import { useTheme, Theme } from '../../../styles/Theme';
import { useAppDispatch, AppDispatch } from '../../../redux/store';

interface BaseDrawerItem {
    id: string;
    icon: string;
    color: keyof Theme['colors'];
    label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
    screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
    onPress: (
        navigation: ReturnType<typeof useNavigation>,
        dispatch: AppDispatch
    ) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, color, label, ...props }: DrawerItemProps) => {
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const navigation = useNavigation<
        DrawerNavigationProp<HomeRoutes, 'OutfitIdeas'>
    >();
    return (
        <RectButton
            onPress={() =>
                'screen' in props
                    ? navigation.navigate(props.screen)
                    : props.onPress(navigation, dispatch)
            }
            style={{ borderRadius: theme.borderRadii.m }}
        >
            <Box flexDirection="row" alignItems="center" padding="m">
                <RoundedIcon
                    iconRatio={0.5}
                    name={icon}
                    size={36}
                    backgroundColor={color}
                    color="background"
                />
                <Text variant="button" color="secondary" marginLeft="m">
                    {label}
                </Text>
            </Box>
        </RectButton>
    );
};

export default DrawerItem;
