import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import createSagaMiddleware from '@redux-saga/core'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import AuthSlice from './Auth/AuthSlice'
import rootsaga from './rootsaga'
import AsyncStorage from '@react-native-async-storage/async-storage'

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage : AsyncStorage,
}

export const store = configureStore({
    reducer: persistReducer(persistConfig, combineReducers({
        auth: AuthSlice
    })),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ 
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          }
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootsaga)

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
