import { combineReducers } from "redux";
import UsersReducer from "./UserReducer";
import Reducer from "../../complete redux/Redux/Reducer/Reducer";


const RootReducer = combineReducers({
    users: UsersReducer,
    users: Reducer,
});

export default RootReducer;