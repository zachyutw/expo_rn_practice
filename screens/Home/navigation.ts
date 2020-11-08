import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type HomeRoutes = {
    Home: undefined;
    HomeDetail: undefined;
};

export type HomeStackRoutes = {
    HomeStack: undefined;
    UserConfig: undefined;
};

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: StackNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
}
