import './App.css';
import {Header} from './components/Header/Header.jsx';
import {TaskList} from './components/TaskList/TaskList.jsx';
import {useState} from 'react';
import {useLocalStorage} from '../hooks/useLocalStorage.jsx';

function App() {
	
	const {getLocalStorage} = useLocalStorage('taskList');
	const [input, setInput] = useState('');
	const [taskList, setTaskList] = useState(getLocalStorage());
	
	return (
		<div className="app">
			<Header input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList}/>
			<TaskList taskList={taskList} setTaskList={setTaskList} input={input} setInput={setInput}/>
		</div>
	);
}

export default App;
