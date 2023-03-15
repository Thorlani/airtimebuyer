import { legacy_createStore as createStore } from "redux";
import Auth from "./AuthReducer";

const store = createStore(Auth);

export default store;
