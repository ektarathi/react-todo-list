import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { TaskActions } from "../redux/actions/taskAction";
import Button from "@material-ui/core/Button";
import useLocalStorage from './useLocalStorege';

const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 200
      }
    },
    addTask: {
      marginTop: 15
    }
}));

export interface AddTaskProps {
    
}
 
const AddTask: React.SFC<AddTaskProps> = () => {
    const classes = useStyles();
    const [value, setValue] = useLocalStorage('item', '');
    const nameDispatch = useDispatch<React.Dispatch<TaskActions>>();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    nameDispatch({ type: "ADD_TASK", payload: value});
    setValue("");
  };

  return (
    <form className={classes.root}>
      <TextField
        type="text"
        className="input"
        label="Enter task name"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.addTask}
      >
        Add Task
      </Button>
    </form>
  );
};
 
export default AddTask;