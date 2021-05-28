import React from 'react';
import store from '../../store';

const TodoPanel = () => {
  
    React.useEffect(()=>{
        store.dispatch(setNewTodo({
            id: 123,
            label: 'testowyLabel',
            done: false,
            description: 'pierwszy wpis',
        }));
    }, []);

    return (
        <div> 
            Page not found !
        </div>
    );
}

export default TodoPanel;