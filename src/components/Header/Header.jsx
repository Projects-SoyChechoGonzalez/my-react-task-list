import {MdOutlineAdd} from 'react-icons/md';
import {useTask} from '../../../hooks/useTask.jsx';
import {Input} from '@chakra-ui/react';


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
			<form onSubmit={handleSubmit}>
				<Input
					width="400px"
					aria-label="Agregar tarea"
					onChange={handleChange}
					type="text"
					placeholder="Agregar tarea"
					value={input}
					required
				/>
				<button style={{padding: '8px'}}>
					<MdOutlineAdd/>
				</button>
			</form>
		</div>
	);
};

export {Header};