import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { ShopReducer } from "../redux-toolkit/redux-slice";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage
}


const rootReducer = combineReducers({
    shopLoad: ShopReducer,
})


const persistedReducer =  persistReducer(persistConfig, rootReducer)

export const StoreShop = configureStore({
    reducer: persistedReducer
})

export const persistorRedux = persistStore(StoreShop)

export type ShopReduxType = ReturnType<typeof StoreShop.getState>