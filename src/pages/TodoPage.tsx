import React, {useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import TodoItem from "../components/TodoItem";
import List from "../components/List";

const TodoPage = () => {

	const [todos, setTodos] = useState<ITodo[]>([]);

	const fetchTodos = () => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then((json: ITodo[]) => setTodos(json))
	}

	useEffect(() => {
		fetchTodos();
	}, [])

	return (
		<div>
			<List title={'Todos:'} items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>} />
		</div>
	);
};

export default TodoPage;
