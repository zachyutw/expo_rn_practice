import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers';

const persistConfig = {
    key: 'appName',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
    const enhancers = compose(applyMiddleware(thunk));
    const store = createStore(persistedReducer, enhancers);
    const persistor = persistStore(store);

    return { store, persistor };
}
