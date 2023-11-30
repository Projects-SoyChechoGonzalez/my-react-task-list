import {FaRegEdit} from 'react-icons/fa';
import {TfiTrash} from 'react-icons/tfi';

import styles from './Task.module.css';

export const Task = () => {
	return (
		<div className={styles.taskContainer}>
			<input type="checkbox"/>
			<div className={styles.content}>
				<span>Hacer la comida</span>
				<div>
					<button>
						<FaRegEdit/>
					</button>
					<button>
						<TfiTrash/>
					</button>
				</div>
			</div>
		</div>
	);
};