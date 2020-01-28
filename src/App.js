import React, { useState } from 'react';
import './App.css';

import TodoInput from './components/todoInput';

function App() {
	const [todoList, setTodoList] = useState([]); //Todo List
	const [newItem, setNewItem] = useState('');
	const [buttonIcon, setButtonIcon] = useState(true); // New Item to put into the Todo List

	function handleChange(e) {
		setButtonIcon(false);
		setNewItem(e.target.value);
	}

	function handleClick(e) {
		e.preventDefault();
		const item = {
			id: Math.random() * 10 + 1,
			value: newItem
		};

		const list = [...todoList];
		list.push(item);
		setTodoList(list);

		setButtonIcon(true);
	}

	function deleteTodo(id) {
		const list = [...todoList];
		const newList = list.filter((item, i) => i !== id);

		setTodoList(newList);
		setNewItem('');
	}

	const todos = todoList.map((todo, id) => (
		<li className='todoItem' key={id}>
			{todo.value}
			<span className='deleteIcon' onClick={() => deleteTodo(id)}>
				{/* Have to pass in the id of the item you want to delete */}X
			</span>
		</li>
	));

	return (
		<div>
			<h1>Welcome to my Todo List</h1>
			<TodoInput
				handleChange={handleChange}
				handleClick={handleClick}
				newItem={newItem}
				todoList={todoList}
				buttonDisabled={buttonIcon}
			/>
			<ul>{todos}</ul>
		</div>
	);
}
export default App;
