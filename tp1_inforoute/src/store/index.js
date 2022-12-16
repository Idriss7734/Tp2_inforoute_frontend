// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import thunk from "redux-thunk";

import TaskReducer from "../reducers/TaskReducer";
import { legacy_createStore as createStore, combineReducers } from "redux";


// Redux store creation.
const store = createStore(
    combineReducers({ tasks: TaskReducer },
      (thunk))
  );

export default store
