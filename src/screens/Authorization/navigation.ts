import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
export const assets = [];

export type AuthenticationRoutes = {
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    PasswordChanged: undefined;
};

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
};

export interface AuthNavigationProps<
    RouteName extends keyof AuthenticationRoutes
> {
    navigation: CompositeNavigationProp<
        StackNavigationProp<AuthenticationRoutes, RouteName>,
        DrawerNavigationProp<AppRoutes, 'Home'>
    >;
    route: RouteProp<AuthenticationRoutes, RouteName>;
}
