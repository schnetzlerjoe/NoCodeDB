import { writable } from 'svelte/store';

function addRow(state, addJSON) {
  state.append(addJSON)
}

function deleteRow(state, index) {
  delete state[index]
}

function createRows() {
	const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		add: (name) => update(n => addRow(n, addJSON)),
		delete: (name) => update(n => deleteRow(n, index)),
		reset: () => set([])
	};
}

export const rows = createRows();