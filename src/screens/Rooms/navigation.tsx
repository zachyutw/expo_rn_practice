import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RoomRoutes = {
    Room: undefined;
    RoomDetail: undefined;
};

export interface RoomNavigationProps<RouteName extends keyof RoomRoutes> {
    navigation: StackNavigationProp<RoomRoutes, RouteName>;
    route: RouteProp<RoomRoutes, RouteName>;
}
