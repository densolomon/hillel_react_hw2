import React from 'react';
import './style.scss';
import ListItem from "./ListItem/ListItem.jsx";

const List = ({
	list,
	status,
	handleUpdateTaskStatus,
	handleDeleteTask,
	handleButtonClick,
}) => {
	return (
		<li className='list'>
			<h2 className='list-header'>
				{status.name}
				:
				{list.length}
			</h2>
			<ul className='list-item'>
				{
					list.map((item) => (
						<ListItem
							key={item.id}
							item={item}
							status={status}
							handleUpdateTaskStatus={handleUpdateTaskStatus}
							handleDeleteTask={handleDeleteTask}
						/>
					))
				}
			</ul>
		</li>
	);
}

export default List;