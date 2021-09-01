import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useParams, useHistory} from 'react-router-dom'
import UserItem from "../components/UserItem";

interface UserPageParams {
	id: string;
}

const UserPage = () => {

	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<UserPageParams>();
	const history = useHistory();

	const id = 56;

	const fetchUser = () => {
		fetch('https://jsonplaceholder.typicode.com/users/' + params.id)
			.then(response => response.json())
			.then((json: IUser) => setUser(json))
	}

	useEffect(() => {
		fetchUser();
	}, [])

	return (
		<div>
			<button onClick={() => history.push('/users')}>Back</button>
			<h2>Page of user: <b>{user?.name}</b></h2>
			<UserItem user={user}/>
		</div>
	);
};

export default UserPage;
