import {Task} from '../Task/Task.jsx';

export const TaskList = ({taskList, setTaskList, input, setInput,}) => {
	return (
		<div>
			{taskList.map((task) => (
				<Task key={task.id} task={task} taskList={taskList} setTaskList={setTaskList} input={input}
				      setInput={setInput}/>
			))}
		</div>
	);
};