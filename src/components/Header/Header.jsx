import {MdOutlineAdd} from 'react-icons/md';
import {useEffect} from 'react';


const Header = ({input, setInput, taskList, setTaskList}) => {
	
	
	const inputData = {
		id: new Date().getTime(),
		task: input,
		completed: false,
	};
	
	const handleChange = (event) => {
		event.preventDefault();
		setInput(event.target.value);
		
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		
		if (input) {
			setTaskList([inputData, ...taskList]);
			setInput('');
		}
	};
	
	useEffect(() => {
		localStorage.setItem('taskList', JSON.stringify(taskList));
	}, [taskList]);
	
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