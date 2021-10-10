<script lang="ts">
	import { slide } from 'svelte/transition';
	import Row from './Row.svelte';
	export let store;
	export let label;
	export let isOpen;
</script>

<h4 class:isOpen on:click={() => (isOpen = !isOpen)}>
	<span>▼</span>
	{label}
</h4>

{#if isOpen}
	<div class="state-mang-data" transition:slide>
		{#if typeof $store === 'object'}
			{#each Object.entries($store) as [key, value]}
				<Row {key} {value} {store} path={key} />
			{/each}
		{:else}
			<Row key={label} value={$store} {store} path={label} simple={true} label={false} />
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
		border-bottom: solid 1px hsla(0, 0%, 90%, 1);
		border-top: solid 1px hsla(0, 0%, 98%, 1);
		box-shadow: var(--level-2, 0 2px 3px rgba(0, 0, 0, 0.1), 0 1px 5px rgba(0, 0, 0, 0.13));
		font-family: 'MonoLisa', monospace;
		text-transform: capitalize;
		padding: 4px 6px;
		cursor: pointer;
		font-size: var(--toy-heading-font-size, 12px);
		margin: 0;
		background: var(--toy-header-bg);
		color: var(--toy-header-color, --toy-color);

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
</style>
