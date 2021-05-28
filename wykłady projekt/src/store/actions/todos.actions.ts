
import {Todo} from "../reducers/todos.reducer";

export enum TodosStoreActions {
    SET_NEW_TODO = 'SET_NEW_TODO', 
    SET_TODO_DONE = 'SET_TODO_DONE',
    SET_DELETE_TODO = 'SET_DELETE_TODO',
}

export interface SetNewTodoAction{
    type: TodosStoreActions.SET_NEW_TODO,
    payload: {
        todo: Todo
    }
}

export interface SetTodoDoneAction {
    type: TodosStoreActions.SET_TODO_DONE,
    payload: {
        id: number,
    }
}

export interface SetDeleteTodoAction {
    type: TodosStoreActions.SET_DELETE_TODO,
    payload: {
        todo: Todo
    }
}

export type Actions = SetNewTodoAction & SetTodoDoneAction & SetDeleteTodoAction;

export const todosActions = {
    setNewTodo: (todo: Todo) => ({
        type: TodosStoreActions.SET_NEW_TODO,
        payload: {todo}
    }),
    setTodoDone: (id: number): SetTodoDoneAction =>({
        type: TodosStoreActions.SET_TODO_DONE,
        payload: { id}
    }),
    setDeleteTodo: (todo: Todo): SetDeleteTodoAction => ({
        type: TodosStoreActions.SET_DELETE_TODO,
        payload: {todo}
    }),

};