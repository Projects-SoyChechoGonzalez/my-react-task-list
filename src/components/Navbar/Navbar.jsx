import {Stack} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';

export const Menu = () => {
	return (
		<Stack direction="row" spacing={4} alignItems="center" justifyContent="center" border="1px" borderColor="gray.200"
		       padding={2}>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">Sobre Nosotros</NavLink>
			<NavLink to="/tasks">Tareas</NavLink>
		</Stack>
	);
};