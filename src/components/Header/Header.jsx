import {MdOutlineAdd} from 'react-icons/md';
import {useTask} from '../../../hooks/useTask.jsx';


const Header = ({input, setInput, taskList, setTaskList}) => {
	const {addTask} = useTask(input, setInput, taskList, setTaskList);
	
	const handleChange = (event) => {
		event.preventDefault();
		setInput(event.target.value);
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setTaskList(addTask);
	};
	
	return (
		<div>
			<h1>
				Todo App
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					aria-label="Agregar tarea"
					onChange={handleChange}
					type="text"
					placeholder="Agregar tarea"
					value={input}
					required
				/>
				<button>
					<MdOutlineAdd/>
				</button>
			</form>
		</div>
	);
};

export {Header};