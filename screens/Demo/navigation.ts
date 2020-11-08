import { RouteProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
};
export type HomeRoutes = {
    OutfitIdeas: undefined;
    FavoriteOutfits: undefined;
    TransactionHistory: undefined;
    EditProfile: undefined;
    Test: undefined;
};

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
}
