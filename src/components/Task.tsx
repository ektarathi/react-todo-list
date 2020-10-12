import * as React from 'react';
import { TaskActions } from "../redux/actions/taskAction";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
export interface TaskProps {
    index: any; task: any;
}
 
const Task: React.SFC<TaskProps> = ({index, task}:TaskProps) => {
    const taskCompleteDispatch = useDispatch<React.Dispatch<TaskActions>>();
    const taskDeleteDispatch = useDispatch<React.Dispatch<TaskActions>>();

    return ( <TableRow key={task.index}>
        <TableCell
          style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
        >
          {task.taskName}
        </TableCell>
        <TableCell
          style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => taskCompleteDispatch({ type: "COMPLETE_TASK", payload: task.taskName, taskIndex: index })}
          >
            Complete
          </Button>
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            color="primary"
            onClick={() => taskDeleteDispatch({ type: "DELETE_TASK", payload: task.taskName, taskIndex: index })}
          >
            Remove
          </Button>
        </TableCell>
      </TableRow> );
}
 
export default Task;