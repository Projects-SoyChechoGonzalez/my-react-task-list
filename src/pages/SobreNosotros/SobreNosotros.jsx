import {Heading, Text} from '@chakra-ui/react';

export const SobreNosotros = () => {
	return (
		<div>
			<Heading mb={8}>Todo List App</Heading>
			<Text color="tomato" mb={8} fontWeight="600">
				La aplicación permite crear una lista de tareas, donde se puede agregar, editar y
				eliminar tareas.
			</Text>
			
			<Text>
				La aplicación ha sido creada usando vite y usa tecnologías como React.js, React Router DOM, React Hooks, React
				Icons, Chakra UI, usa localStorage para guardar los datos de la lista de tareas y se han creado los custom Hooks
				para trabajar la lógica de las funciones de la aplicación y el localStorage.
			</Text>
		</div>
	);
};