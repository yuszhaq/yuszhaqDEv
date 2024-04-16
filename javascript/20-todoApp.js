(function () {
	const todoForm = document.querySelector('#todoForm');
	const todoFormInput = document.querySelector('.todo-input');
	const todoItem = document.querySelector('.todo-item-container');
	const todoList = document.querySelector('.todo-list');
	const itemsRemaining = document.querySelector('#itemsRemaining');

	calculateItemsRemaining();

	function calculateItemsRemaining() {
		const todoItemLabels = document.querySelectorAll('.todo-item-label');
		let count = 0;
		todoItemLabels.forEach((todoItemLabel) => {
			if (!todoItemLabel.classList.contains('line-through')) {
				count++;
			}
		});

		// const itemsCount = Array.from(todoItemLabels).filter((todoItemLabel) => {
		// 	return !todoItemLabel.classList.contains('line-through');
		// }).length;
		// itemsRemaining.textContent = itemsCount;

		itemsRemaining.textContent = count;
	}

	todoForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const newTodoItem = todoItem.cloneNode(true);
		const todoItemLabel = newTodoItem.querySelector('.todo-item-label');
		todoItemLabel.textContent = todoFormInput.value;
		todoItemLabel.classList.remove('line-through');
		newTodoItem.querySelector('.todo-check').checked = false;

		todoList.append(newTodoItem);

		todoFormInput.value = '';
		calculateItemsRemaining();
	});

	todoList.addEventListener('click', (event) => {
		if (event.target.classList.contains('todo-check')) {
			const todoItemToComplete = event.target.nextElementSibling;
			todoItemToComplete.classList.toggle('line-through');
			calculateItemsRemaining();
		}
		if (event.target.classList.contains('x-button')) {
			const todoItemToDelete = event.target.closest('.todo-item-container');
			todoItemToDelete.remove();
			calculateItemsRemaining();
		}
	});
})();
