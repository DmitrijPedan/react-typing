import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import UserItem from "../components/UserItem";
import List from "../components/List";

const UsersPage = () => {

	const [users, setUsers] = useState<IUser[]>([]);

	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then((json: IUser[]) => setUsers(json))
	}

	useEffect(() => {
		fetchUsers();
	}, [])

	return (
		<div>
			<List title={'Users:'} items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>} />
		</div>
	);
};

export default UsersPage;
