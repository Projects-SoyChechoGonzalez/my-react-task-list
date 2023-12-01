import {Button, Stack, useColorMode} from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';

export const Menu = () => {
	
	const {colorMode, toggleColorMode} = useColorMode();
	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between" border="1px" borderColor="gray.200"
		       padding={4}>
			<Stack gap={4} direction="row">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">Sobre Nosotros</NavLink>
				<NavLink to="/tasks">Tareas</NavLink>
			</Stack>
			<Button onClick={toggleColorMode}>
				{colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
		</Stack>
	);
};