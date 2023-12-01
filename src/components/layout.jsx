import {Menu} from './Navbar/Navbar.jsx';

export const Layout = ({children}) => {
	return (
		<section style={{
			maxWidth: '800px',
			margin: '0 auto',
			display: 'flex',
			flexDirection: 'column',
			gap: '1.5rem'
		}}>
			<Menu/>
			
			{children}
		</section>
	);
};