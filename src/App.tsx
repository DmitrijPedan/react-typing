import React, {useEffect, useState} from 'react';
import './App.css';
import Card, {CardVariant} from "./components/Card";
import {IUser, ITodo} from "./types/types";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

function App() {

	const [users, setUsers] = useState<IUser[]>([]);
	const [todos, setTodos] = useState<ITodo[]>([]);

	const fetchUsers = () => {
		fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
			.then(response => response.json())
			.then((json: IUser[]) => setUsers(json))
	}

	const fetchTodos = () => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
			.then(response => response.json())
			.then((json: ITodo[]) => setTodos(json))
	}

	useEffect(() => {
		fetchUsers();
		fetchTodos();
	}, [])

  return (
    <div className="App">
			<EventsExample></EventsExample>
      <h1>Works</h1>
			<Card width={'250px'} height={'250px'} backgroundColor={'red'} variant={CardVariant.outlined} cardAction={(num) => console.log('action', num)}>
				<p>Content</p>
			</Card>
			<List title={'Users:'} items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>} />
			<List title={'Todos:'} items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>} />
    </div>
  );
}

export default App;
