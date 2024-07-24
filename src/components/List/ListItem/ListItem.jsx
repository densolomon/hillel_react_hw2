import React from 'react';
import './style.scss';
import Button from "../../Button/Button.jsx";
const ListItem = ({
	item,
	status,
	handleUpdateTaskStatus,
	handleDeleteTask
}) => {
	const { id, title } = item;

	const getNextStatus = (currentStatus) => {
		if (currentStatus === 0) return 1;
		if (currentStatus === 1) return 0;
		if (currentStatus === 1 && status.buttonName.done) return 2;
	}

	const handleButtonClick = () => {
		if (status.status === 2) {
			handleDeleteTask(id);
		} else {
			handleUpdateTaskStatus(id, getNextStatus(status.status));
		}
	}

	return (
		<li className='list-item-li'>
			<p>{title}</p>
			<Button
				handleClick={handleButtonClick}
				buttonText={status.buttonName.action}
			/>
			{
				status.status === 1 ? (
					<Button
						buttonText={status.buttonName.done}
						handleClick={() => handleUpdateTaskStatus(id, 2)}
					/>
				) : null
			}
		</li>
	);
};

export default ListItem;