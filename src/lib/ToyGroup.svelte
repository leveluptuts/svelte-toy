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
		box-shadow: var(--level-2, 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23));
		font-family: 'MonoLisa', monospace;
		text-transform: capitalize;
		padding: 6px 10px;
		cursor: pointer;
		font-size: var(--toy-heading-font-size, 16px);
		margin: 0;
		background: var(--toy-header-background, #000);
		color: var(--toy-header-color, #fff);

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
