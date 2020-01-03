import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [newTodo, setNewTodo] = useState("");
	const [toDos, setToDos] = useState([]);

	function handleNewTodo(e) {
		e.preventDefault();
		setNewTodo(e.target.value);
	}

	function handleToDos(e) {
		e.preventDefault();
		if (newTodo === "") return;
		setToDos([...toDos, { id: Date.now(), text: newTodo }]);
		e.target.reset();

		function removeTodo(id) {
			setToDos(toDos.filter(todo => todo.id != id));
		}
		console.log(newTodo);
	}

	return (
		<div className="text-center mt-5">
			<div className="head mx-auto">
				<h1>ToDo List</h1>
			</div>
			<form onSubmit={handleToDos}>
				<input
					className="input"
					placeholder="new to do"
					onChange={handleNewTodo}
				/>
				<ul className="todos mx-auto">
					{toDos.map(todo => (
						<li key={todo.id}>
							{" "}
							{todo.text}
							<a
								href="#"
								className="remove float-right"
								onClick={() => removeTodo(todo.id)}>
								{" "}
								<i class="fas fa-times" />
							</a>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
}
