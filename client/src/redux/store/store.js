import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web



// const persistConfig = {
//     key: "authType",
//     storage: storage,
//   };
  
  // const pReducer = persistReducer(persistConfig, rootReducer);

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(thunk), devtools));

// const persistor = persistStore(store);

export { store }; 
// export { persistor, store }; 