<script>import set from 'lodash.set';
export let key;
export let value;
export let store;
export let path;
export let simple = false;
export let label = true;
function updateStore(value) {
    // If it's single value
    if (simple) {
        $store = value;
        // If store is complex (array, object)
    }
    else {
        store.update((u) => {
            let newData = { ...u };
            set(newData, path, value);
            return newData;
        });
    }
}
</script>

{#if value !== null}
	{#if typeof value === 'object'}
		{#if Array.isArray(value)}
			{#if label}
				<span class="key">{key}{':'}</span>
			{/if}
			<!-- Array -->
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
			{#if label}
				<span class="key">{key}{':'}</span>
			{/if}
			<div class="nested">
				{#each Object.entries(value) as [nestedKey, nestedValue]}
					<svelte:self key={nestedKey} value={nestedValue} {store} path={path + '.' + nestedKey} />
				{/each}
			</div>
		{/if}
	{:else}
		<!-- TODO Labels are potentially not unique. MUST FIX BEFORE V1 -->
		<label class="st-container" for={path}>
			{#if label}
				<span class="key">{key}{':'}</span>
			{/if}
			{#if typeof value === 'string'}
				<input id={path} type="text" {value} on:input={(e) => updateStore(e.target.value)} />
			{:else if typeof value === 'boolean'}
				<input
					id={path}
					type="checkbox"
					checked={value}
					on:change={(e) => {
						updateStore(e.target.checked);
					}}
				/>
			{:else if typeof value === 'number'}
				<input
					id={path}
					type="number"
					{value}
					on:change={(e) => {
						updateStore(parseFloat(e.target.value));
					}}
				/>
			{/if}
		</label>
	{/if}
{/if}

<style>
	.key {
		font-size: 0.6rem;
		color: var(--toy-key-color);
		opacity: 0.9;
	}

	.st-container {
		display: flex;
		align-items: baseline;
		justify-content: flex-start;
		margin-bottom: 2px;
	}

	input {
		display: inline;
		/* width: auto; */
		padding: 0 3px;
		margin: 0 4px;
		margin-left: 2px;
		font-size: 0.6rem;
		font-family: 'MonoLisa', monospace;
		flex-grow: 0;
		color: var(--toy-color-int);
		color: var(--toy-value-color);
		border: 0;
		border-radius: 1px;
		outline-offset: 1px;
		background: var(--toy-background-int);
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	[type='number'] {
		width: 80px;
	}

	.nested {
		margin-left: 15px;
	}
</style>
