export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
    Start: undefined;
    Home: undefined;
    Authorization: undefined;
};

export type BottomTabParamList = {
    TabOne: undefined;
    TabTwo: undefined;
};

export type TabOneParamList = {
    TabOneScreen: undefined;
};

export type TabTwoParamList = {
    TabTwoScreen: undefined;
};

export type DefaultRootState = {
    authorization: {
        credit: any;
        loading: string;
        error: any;
    };
};
