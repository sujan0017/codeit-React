import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import { PERSIST, persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };
