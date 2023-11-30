import './App.css';
import {Header} from './components/Header/Header.jsx';
import {TaskList} from './components/TaskList/TaskList.jsx';

function App() {
	return (
		<div className="app">
			<Header/>
			<TaskList/>
		</div>
	);
}

export default App;
