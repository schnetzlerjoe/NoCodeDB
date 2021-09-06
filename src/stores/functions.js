import { writable } from 'svelte/store';

function addFunction(state, func) {
  state[func.name] = func
}

function deleteFunction(state, func) {
  delete state[func.name]
}

function createFunctions() {
	const { subscribe, set, update } = writable({});

	return {
		subscribe,
		add: (name) => update(n => addFunction(n, name)),
		delete: (name) => update(n => deleteFunction(n, name)),
		reset: () => set({})
	};
}

export const functions = createFunctions();