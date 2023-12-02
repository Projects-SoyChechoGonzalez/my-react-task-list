import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage.jsx';

export const useTask = (input, setInput, taskList, setTaskList, task = {}, editedText = '') => {
	
	const inputData = {
		id: new Date().getTime(),
		title: input,
		completed: false,
	};
	
	const addTask = () => {
		if (input && setTaskList) {
			setTaskList([inputData, ...taskList]);
			setInput('');
		}
	};
	
	const removeTask = () => {
		return taskList.filter((item) => item.id !== task?.id);
	};
	
	const updateTask = () => {
		return taskList.map((item) => {
			if (item.id === task.id) {
				return {...item, title: editedText};
			}
			return item;
		});
	};
	
	const {setLocalStorage} = useLocalStorage('taskList', taskList);
	useEffect(() => {
		setLocalStorage(taskList);
	}, [taskList, setLocalStorage]);
	
	return {
		addTask,
		removeTask,
		updateTask,
	};
};