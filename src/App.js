import React, { useState } from 'react';
import './App.css';

import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

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
		setNewItem('');
		setButtonIcon(true);
	}

	function deleteTodo(id) {
		const list = [...todoList];
		const newList = list.filter((item, i) => i !== id);

		setTodoList(newList);
	}

	return (
		<div>
			<div className='form-container'>
				<h2>Git-Er-Done</h2>
				<TodoInput
					handleChange={handleChange}
					handleClick={handleClick}
					newItem={newItem}
					todoList={todoList}
					buttonDisabled={buttonIcon}
				/>
			</div>
			<section className='list-container'>
				<TodoList todoList={todoList} deleteTodo={deleteTodo} />
			</section>
		</div>
	);
}
export default App;
