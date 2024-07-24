import React, {useEffect, useState} from 'react';
import './style.scss';
import axios from "axios";
import { statusConstants } from '../../constants/statusConstants';
import List from '../List/List';

function ListContainer() {
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const response = await axios.get(
					"https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks"
				);
				setTaskList(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTasks();
	}, []);

	const handleFilterTasksByStatus = (status) => {
		return taskList.filter((item) => item.status === status);
	}

	const handleUpdateTaskStatus = (id, newStatus) => {
		setTaskList((prevState) =>
			prevState.map((task) =>
				task.id === id ? {...task, status: newStatus} : task
			)
		)
	}

	const handleDeleteTask = (id) => {
		setTaskList((prevState) => prevState.filter((task) => task.id !== id))
	}

	return (
		<div className='container'>
			{statusConstants.map((item) => (
				<List
					key={item.status}
					list={handleFilterTasksByStatus(item.status)}
					status={item}
					handleUpdateTaskStatus={handleUpdateTaskStatus}
					handleDeleteTask={handleDeleteTask}
				/>
			))}
		</div>
	);
}

export default ListContainer;