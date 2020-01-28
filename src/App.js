import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

function App() {
	const [newItem, setNewItem] = useState('');
	const [todoList, setTodoList] = useState([]); //Todo List
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

	console.log('New Item: ', newItem);
	return (
		<div>
			<Header />
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
			<Footer />
		</div>
	);
}
export default App;
