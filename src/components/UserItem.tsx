import React, {FC} from 'react';
import {IUser} from "../types/types";
import {Link} from "react-router-dom";

interface UserItemProps {
	user: IUser | null
}

const UserItem: FC<UserItemProps> = ({user}) => {
	return (
		<div>
			<p style={{textAlign: 'left', border: '1px solid lightgray'}}>
				Name: {user?.name}, email: {user?.email}, address: {user?.address.city}, {user?.address.street}
				<Link to={`users/${user?.id}`}>View</Link>
			</p>
		</div>
	);
};

export default UserItem;
