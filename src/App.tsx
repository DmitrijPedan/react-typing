import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import UsersPage from "./pages/UsersPage";
import TodoPage from "./pages/TodoPage";
import CardPage from "./pages/CardPage";
import EventsPage from "./pages/EventsPage";
import UserPage from "./pages/UserPage";

function App() {

  return (
  	<BrowserRouter>
			<header className="header">
				<Link to={'/users'}>Users</Link>
				<Link to={'/todos'}>Todos</Link>
				<Link to={'/card'}>Card</Link>
				<Link to={'/events'}>Events</Link>
			</header>
			<div className="App">
				<Route path={'/users'} exact><UsersPage/></Route>
				<Route path={'/users/:id'}><UserPage/></Route>
				<Route path={'/todos'} exact><TodoPage/></Route>
				<Route path={'/card'} exact><CardPage/></Route>
				<Route path={'/events'} exact><EventsPage/></Route>
			</div>
		</BrowserRouter>
  );
}

export default App;
