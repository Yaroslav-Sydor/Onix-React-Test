import {createSlice,   createAsyncThunk,   createEntityAdapter} from "@reduxjs/toolkit";
import { userAPI } from './userAPI';

const fetchUserById = createAsyncThunk(
    'user/fetchByIdStatus',
    async (userId, thunkAPI) => {
        const response = await userAPI.fetchById(userId);
        return response.data;
    }
);



const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        entries: [],
        count: 0,
        todos: ['gfhsjsfjhj', 'hfhfhfhhfhfh', 'iruururur', 'oriurhrh', 'fsbsfsfnf'],
        loading: 'idle',
        users: [],
    },
    reducers: {
        usersLoading(state, action) {
            // Используем подход "state machine" для состояния загрузки вместо логических значений
            if (state.loading === 'idle') {
                state.loading = 'pending';
            }
        },
        usersReceived(state, action) {
            if (state.loading === 'pending') {
                state.loading = 'idle';
                state.users = action.payload;
            }
        },

            incriment(state){
            state.count = state.count +1
        },
        decriment(state){
            state.count = state.count -1
        },
        addTodo(state, action){
            state.todos.push(action.payload)
        },
        removTodos(state){
             state.todos.pop()
        }

    },
    extraReducers: {
        [fetchUserById.fullfilled]: (state, action) => {
            // Добавляем пользователя в массив состояния
            state.entries.push(action.payload);
        },
    },
});


export const {
    usersLoading,
    usersReceived,
} = toolkitSlice.actions;

const fetchUsers = () => async (dispatch) => {
    dispatch(usersLoading());
    const response = await usersAPI.fetchAll();
    dispatch(usersReceived(response.data));
};


export  default toolkitSlice.reducer
export const {incriment, decriment, addTodo, removTodos} = toolkitSlice.actions