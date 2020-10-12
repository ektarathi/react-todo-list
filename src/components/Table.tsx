import * as React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/reducers/rootReducer";
import Task from "./Task";
import AddTask from "./AddTask";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	table: {
		minWidth: 250,
	},
});

export interface TableProps {}

const TableList: React.SFC<TableProps> = () => {
	const classes = useStyles();
    const tasks = useSelector((state: AppState) => state.task);

	return (
		<React.Fragment>
			{tasks.length === 0 ? (
                <Typography variant="h6" component="h2"> Add Task to the list:</Typography>
			) : (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Name</TableCell>
								<TableCell>Completed Task </TableCell>
								<TableCell>Deleted Task </TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{tasks.map((task: any, index: any) => (
								<Task key={index} index={index} task={task} />
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
			<AddTask />
		</React.Fragment>
	);
};

export default TableList;
