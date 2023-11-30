import {FaRegEdit} from 'react-icons/fa';
import {TfiTrash} from 'react-icons/tfi';
import {IoIosSave} from 'react-icons/io';

import styles from './Task.module.css';
import {useState} from 'react';
import {useTask} from '../../../hooks/useTask.jsx';

export const Task = ({task, taskList, setTaskList, input, setInput,}) => {
	const [edit, setEdit] = useState(false);
	const [editedText, setEditedText] = useState(task.title);
	const {removeTask, updateTask} = useTask(input, setInput, taskList, setTaskList, task, editedText);
	
	const handleSaveEdit = () => {
		setTaskList(updateTask);
		setEdit(false);
	};
	
	const handleEdit = () => {
		setEdit(true);
	};
	
	const handleRemove = () => {
		setTaskList(removeTask);
	};
	
	return (
		<div className={styles.taskContainer}>
			<input type="checkbox"/>
			<div className={styles.content}>
				{edit ? (
					<input
						aria-label="todo"
						data-testid="editInput"
						type="text"
						value={editedText}
						onChange={(event) => setEditedText(event.target.value)}
						autoFocus
						required
						maxLength={50}
						minLength={3}
					/>
				) : (
					<span data-testid="todoTitle">{task.title}</span>
				)}
				<div>
					{edit ? (
						
						<button onClick={handleSaveEdit}>
							<IoIosSave/>
						</button>
					) : (
						<div>
							<button onClick={handleEdit}>
								<FaRegEdit/>
							</button>
							<button onClick={handleRemove}>
								<TfiTrash/>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};