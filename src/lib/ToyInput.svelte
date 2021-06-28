<script lang="ts">
	import { slide } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import { onDestroy } from 'svelte';

	export let store;
	export let label;

	export let isOpen;
	let localStore = writable(null);
	const unsub = store.subscribe((val) => ($localStore = val));

	function updateStore(property, value) {
		store.update((u) => {
			let newUser = { ...u };
			newUser[property] = value;
			return newUser;
		});
	}

	function updateObject(property, value) {
		let newData = JSON.parse(value);
		console.log('newData', newData);
		store.update((u) => {
			let newUser = { ...u };
			newUser[property] = newData;
			return newUser;
		});
	}

	onDestroy(unsub);
</script>

<h4 class:isOpen on:click={() => (isOpen = !isOpen)}>
	<span>▼</span>
	{label}
</h4>
{#if isOpen}
	<div class="state-mang-data" transition:slide>
		{#if typeof $localStore === 'object'}
			{#each Object.entries($localStore) as [key, value]}
				<div>
					{#if typeof value === 'string'}
						<label>
							{key}:
							<input type="text" {value} on:input={(e) => updateStore(key, e.target.value)} />
						</label>
					{:else if typeof value === 'boolean'}
						<label>
							<input
								type="checkbox"
								checked={value}
								on:change={(e) => {
									updateStore(key, e.target.checked);
								}}
							/>:{key}
						</label>
					{:else if typeof value === 'object'}
						<label>
							{key}:
							<textarea
								on:change={(e) => {
									updateObject(key, e.target.value);
								}}
								value={JSON.stringify(value)}
							/>
						</label>
					{/if}
				</div>
			{/each}
		{:else if typeof $localStore === 'boolean'}
			<label>
				<input
					type="checkbox"
					checked={$localStore}
					on:change={(e) => {
						store.update(() => e.target.checked);
					}}
				/>{$localStore.toString()}
			</label>
		{/if}
	</div>
{/if}

<style lang="scss">
	div {
		margin-bottom: 5px;
	}

	.state-mang-data {
		padding: 10px;
	}

	h4 {
		box-shadow: var(--level-2);
		font-family: 'MonoLisa', monospace;
		text-transform: capitalize;
		padding: 6px 10px;
		cursor: pointer;
		font-size: var(--state-tool-heading-font-size, 16px);
		margin: 0;
		background: var(--primary);
		color: var(--white);

		span {
			display: inline-block;
			font-size: 10px;
			transform: rotate(-90deg);
			transition: 0.2s transform var(--ease-in-out-quint);
		}

		&.isOpen {
			span {
				transform: rotate(0turn);
			}
		}
	}

	label {
		font-size: 10px;
	}
	input {
		font-size: 14px;
	}

	textarea {
		font-size: 12px;
	}
</style>
