import { applyMiddleware, createStore, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
import reducer from './reducer';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
//* issue resolve Property 'then' does not exist on type 'AsyncThunkAction' Redux-toolkit
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
// const persistConfig = {
//     key: 'appName',
//     storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer,
    middleware: [thunk],
});
export type RootState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
