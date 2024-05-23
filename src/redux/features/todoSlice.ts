import { PayloadAction, createSlice } from '@reduxjs/toolkit';


type TTodo = {
    id: string;
    title : string ;
    description : string ;
    isCompleted ?: boolean;
};


type TInitialState = {

    todos : TTodo[] ;
};


const initialState: TInitialState = {
    todos: [] ,
} ;

  
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state , action : PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload , isCompleted : false});
        },

        removeTodo:(state , action : PayloadAction<string>) => {
            state.todos=state.todos.filter((item) => item.id != action.payload);
        },

        toggleComplete :(state , action:PayloadAction<string>) => {
            const task = state.todos.find((item) => item.id = action.payload);
            task!.isCompleted = !task?.isCompleted;
        } ,

        updateTodo: (state, action: PayloadAction<TTodo>) => {
            const { id, title, description } = action.payload;
            const todoIndex = state.todos.findIndex((todo) => todo.id === id);
            if (todoIndex !== -1) {
                state.todos[todoIndex] = { ...state.todos[todoIndex], title, description };
            }
        },
    } ,

    
});

export const {addTodo , removeTodo , toggleComplete , updateTodo} = todoSlice.actions;

export default todoSlice.reducer;