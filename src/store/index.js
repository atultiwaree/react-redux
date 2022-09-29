import { createStore } from "redux";
import reducer from "../reducer";
const initVal = {
    counter: 0
}
const store = createStore(reducer, initVal);
export default store;