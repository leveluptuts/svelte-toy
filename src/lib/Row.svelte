<script lang="ts">
	import set from 'lodash.set';
	export let key;
	export let value;
	export let store;
	export let path;
	export let label = true;

	function updateStore(property, value) {
		store.update((u) => {
			console.log('u', u, value, property, path);
			let newData = { ...u };
			set(newData, path, value);
			return newData;
		});
	}
</script>

{#if value !== null}
	{#if typeof value === 'object'}
		{#if Array.isArray(value)}
			<span class="key">{key}</span>
			{':'}
			{#each value as nestedValue, index}
				<svelte:self
					label={false}
					{key}
					value={nestedValue}
					{store}
					path={path + '[' + index + ']'}
				/>
			{/each}
		{:else}
			<span class="key">{key}</span>
			{':'}
			<div class="nested">
				{#each Object.entries(value) as [nestedKey, nestedValue]}
					<svelte:self key={nestedKey} value={nestedValue} {store} path={path + '.' + nestedKey} />
				{/each}
			</div>
		{/if}
	{:else}
		<label class="container">
			{#if label}
				<span class="key">{key}</span>
				{':'}
			{/if}
			{#if typeof value === 'string'}
				<input type="text" {value} on:input={(e) => updateStore(key, e.target.value)} />
			{:else if typeof value === 'boolean'}
				<input
					type="checkbox"
					checked={value}
					on:change={(e) => {
						updateStore(key, e.target.checked);
					}}
				/>
			{:else if typeof value === 'number'}
				<input
					type="number"
					{value}
					on:change={(e) => {
						updateStore(key, parseFloat(e.target.value));
					}}
				/>
			{/if}
		</label>
	{/if}
{/if}

<style>
	.key {
		font-size: 0.6rem;
	}

	.container {
		display: flex;
		align-items: baseline;
	}

	input {
		display: inline;
		width: auto;
	}
	.nested {
		margin-left: 15px;
	}
</style>
