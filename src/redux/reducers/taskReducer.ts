import { TaskActions } from "../actions/taskAction";

const NameReducer = (taskList = [] as any, action: TaskActions) => {
	switch (action.type) {
		case "ADD_TASK":
			return [
				...taskList,
				{
					taskName: action.payload,
				},
			];
		case "COMPLETE_TASK":
			console.log("welcome:", taskList, taskList[action.taskIndex]);
			const completedTask = [...taskList];
			completedTask[action.taskIndex].isCompleted = true;
			return completedTask;
		case "DELETE_TASK":
			const deletedTask = [...taskList];
			deletedTask.splice(action.taskIndex, 1);
			return deletedTask;
		default:
			return taskList;
	}
};

export default NameReducer;
