import {FaRegEdit} from 'react-icons/fa';
import {TfiTrash} from 'react-icons/tfi';
import {IoIosSave} from 'react-icons/io';

import styles from './Task.module.css';
import {useState} from 'react';
import {useTask} from '../../../hooks/useTask.jsx';
import {Box, Checkbox, Input, Stack, Text} from '@chakra-ui/react';

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
		<Stack gap={4} direction="row" className={styles.taskContainer}>
			<Checkbox size="md" colorScheme="green"/>
			<Box className={styles.content} alignItems="center" direction="column">
				{edit ? (
					<Input
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
					<Text fontSize="16px">{task.title}</Text>
				)}
				<Box>
					{edit ? (
						
						<button onClick={handleSaveEdit}>
							<IoIosSave fontSize="24px"/>
						</button>
					) : (
						<Stack direction="row">
							<button onClick={handleEdit}>
								<FaRegEdit fontSize="24px"/>
							</button>
							<button onClick={handleRemove}>
								<TfiTrash fontSize="24px"/>
							</button>
						</Stack>
					)}
				</Box>
			</Box>
		</Stack>
	);
};