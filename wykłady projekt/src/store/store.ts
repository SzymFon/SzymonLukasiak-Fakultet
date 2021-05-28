import { combineReducers } from "redux";
import { todosStoreReducer, TodosList, todosListInitialState } from "./reducers/todos.reducer"
import {Actions as todosActions} from './actions/todos.actions';


export type StoreActionType = todosActions;

export interface StoreState{
    todos: TodosList;
};

export const initialStoreState: StoreState = {
    todos: todosListInitialState,
};


export const reducers = combineReducers<StoreState>({
    todos: todosStoreReducer,
});