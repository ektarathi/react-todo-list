import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    task: taskReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;