import React, {useEffect, useState} from 'react';
import './App.css';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

function App() {

	const [users, setUsers] = useState<IUser[]>([])


	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then((json: IUser[]) => setUsers(json))
	}

	useEffect(() => {
		fetchUsers()
	}, [])

  return (
    <div className="App">
      <h1>Works</h1>
			<Card width={'250px'} height={'250px'} backgroundColor={'red'} variant={CardVariant.outlined} cardAction={(num) => console.log('action', num)}>
				<p>Content</p>
			</Card>
			<UserList users={users}/>
    </div>
  );
}

export default App;
