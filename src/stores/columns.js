import { writable } from 'svelte/store';

function addColumn(state, addJSON) {
  state.append(addJSON)
}

function deleteColumn(state, index) {
  delete state[index]
}

function createColumnJSON(name, size = 250) {
  return {
    prop: name.toLowerCase(),
    name: name,
    sortable: true,
    size: size
  }
}

function createColumns() {
	const { subscribe, set, update } = writable([createColumnJSON("User", 250)]);

	return {
		subscribe,
		add: (name) => update(n => addColumn(n, addJSON)),
		delete: (name) => update(n => deleteColumn(n, index)),
		reset: () => set([])
	};
}

export const columns = createColumns();