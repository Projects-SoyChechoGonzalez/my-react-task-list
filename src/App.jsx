import './App.css';
import {Header} from './components/Header/Header.jsx';
import {TaskList} from './components/TaskList/TaskList.jsx';
import {useState} from 'react';

const getLocalStorage = () => {
	const key = 'taskList';
	const list = localStorage.getItem(key);
	
	if (!list) {
		localStorage.setItem(key, JSON.stringify([]));
		return [];
	}
	if (list) {
		return JSON.parse(list);
	}
	return list;
	
};

function App() {
	
	const [input, setInput] = useState('');
	const [taskList, setTaskList] = useState(getLocalStorage());
	
	return (
		<div className="app">
			<Header input={input} setInput={setInput} taskList={taskList} setTaskList={setTaskList}/>
			<TaskList taskList={taskList} setTaskList={setTaskList}/>
		</div>
	);
}

export default App;
