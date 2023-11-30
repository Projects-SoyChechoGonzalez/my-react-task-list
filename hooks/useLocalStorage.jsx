export const useLocalStorage = (key, taskList = []) => {
	const getLocalStorage = () => {
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
	
	const setLocalStorage = () => {
		localStorage.setItem(key, JSON.stringify(taskList));
	};
	
	return {
		getLocalStorage,
		setLocalStorage
	};
};