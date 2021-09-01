import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserListProps {
	users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {

	return (
		<div>
			<h2>Users:</h2>
			{users.map(user =>
				<div key={user.id}>
					<p style={{textAlign: 'left', border: '1px solid lightgray'}}>Name: {user.name}, email: {user.email}, address: {user.address.city}, {user.address.street}</p>
				</div>
			)}
		</div>
	);
};

export default UserList;
