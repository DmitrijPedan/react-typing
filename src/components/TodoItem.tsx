import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface UserItemProps {
	todo: ITodo
}

const TodoItem: FC<UserItemProps> = ({todo}) => {
	return (
		<div>
			<p style={{textAlign: 'left', border: '1px solid teal'}}>
				<b>{todo.title}</b>,
				<span style={{backgroundColor: todo.completed ? 'green' : 'orange', display: 'inline-block', padding: '2px 4px', margin: '0 10px'}}>
					{todo.completed ? 'completed' : 'not completed'}
				</span>
			</p>
		</div>
	);
};

export default TodoItem;
