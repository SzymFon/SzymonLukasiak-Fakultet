import { CallToActionSharp, Description } from "@material-ui/icons";
import { Reducer } from "redux";
import { TodosStoreActions } from "../actions/todos.actions";

export interface Todo {
    id:number;
    label: string;
    done: boolean;
    description: string;
}

export interface TodosList {
    list: Todo[];
}

export const todosListInitialState: TodosList = {
    list : [
        {
            id: -1,
            description: '',
            done: false,
            label: '',
        }
    ]
};

export const todosStoreReducer: Reducer<TodosList, Actions> = 
    (state: TodosList = todosListInitialState, actions: Actions) => {
        switch (actions.type){
            case TodosStoreActions.SET_NEW_TODO:
                return {
                    ...state,
                    list: [
                        ...state.list,
                        actions.payload.todo
                    ]
                };
            case TodosStoreActions.SET_TODO_DONE:
                const todoToChange: Todo | undefined = state.list.find(el => el.id === actions.payload.id);
                if (todoToChange) {
                    todoToChange.done = true;
                    return {
                        ...state,
                        list: [
                            ...state.list.filter(el => el.id !== actions.payload.id),
                            todoToChange
                        ]
                    };
                }
                return state;
            case TodosStoreActions.SET_DELETE_TODO:
                return {
                    ...state,
                    list: state.list.filter(el => el.id !== actions.payload.todo.id)
                };
            default:
                return state;
        }
    }
}