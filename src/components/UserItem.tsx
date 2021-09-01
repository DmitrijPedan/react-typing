import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
	user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
	return (
		<div>
			<p style={{textAlign: 'left', border: '1px solid lightgray'}}>Name: {user.name}, email: {user.email}, address: {user.address.city}, {user.address.street}</p>
		</div>
	);
};

export default UserItem;
