<script >import set from 'lodash.set';
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
		<!-- TODO Labels are potentiall not unique. MUST FIX BEFORE V1 -->
		<label class="container" for={path}>
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
