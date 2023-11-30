import {Task} from '../Task/Task.jsx';

export const TaskList = ({taskList, setTaskList}) => {
	return (
		<div>
			{taskList.map((task) => (
				<Task key={task.id} task={task} taskList={taskList} setTaskList={setTaskList}/>
			))}
		</div>
	);
};