import { applyMiddleware, createStore, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducers';

// const persistConfig = {
//     key: 'appName',
//     storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export default () => ({
    store: configureStore({
        reducer,
        middleware: [thunk],
    }),
});
