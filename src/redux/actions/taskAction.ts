export interface AddTaskAction {
    readonly type: 'ADD_TASK';
    payload: string;
}

export interface CompleteTaskAction {
    readonly type: 'COMPLETE_TASK';
    payload: string;
    taskIndex: number
}

export interface DeleteTaskAction {
    readonly type: 'DELETE_TASK';
    payload: string;
    taskIndex: number
}


export type TaskActions =
| AddTaskAction
| CompleteTaskAction
| DeleteTaskAction