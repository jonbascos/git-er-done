import React from 'react';

function TodoInput(props) {
	return (
		<div>
			<form>
				<input
					type='text'
					name={props.newItem}
					placeholder='Enter New Item'
					value={props.newItem.value}
					onChange={props.handleChange}
				/>
				<br />
				<button
					className={
						props.buttonDisabled ? 'buttonDisabled' : 'button'
					}
					onClick={props.handleClick}
				>
					Add Item
				</button>
			</form>
		</div>
	);
}
export default TodoInput;
