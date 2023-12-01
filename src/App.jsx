import './App.css';
import {Layout} from './components/layout.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/Home.jsx';
import {TareasPage} from './pages/Tareas/Tareas.jsx';
import {SobreNosotros} from './pages/SobreNosotros/SobreNosotros.jsx';

function App() {
	
	
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home/>}/>
					
					<Route path="/tasks" element={<TareasPage/>}/>
					<Route path="/about" element={<SobreNosotros/>}/>
				</Routes>
			</Layout>
		</BrowserRouter>
	
	);
}

export default App;
