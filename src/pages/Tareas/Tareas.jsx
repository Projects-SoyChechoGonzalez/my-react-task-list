import {useLocalStorage} from '../../../hooks/useLocalStorage.jsx';
import {useState} from 'react';
import {Header} from '../../components/Header/Header.jsx';
import {TaskList} from '../../components/TaskList/TaskList.jsx';

export const TareasPage = () => {
	
	const {getLocalStorage} = useLocalStorage('taskList');
	const [input, setInput] = useState('');
	const [taskList, setTaskList] = useState(getLocalStorage());
	return (
		<>
			<Header input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList}/>
			<TaskList taskList={taskList} setTaskList={setTaskList} input={input} setInput={setInput}/>
		</>
	);
};