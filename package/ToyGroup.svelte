<script>import { slide } from 'svelte/transition';
import Row from './Row.svelte';
export let store;
export let label;
export let isOpen;
</script>

{#if $store}
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
{/if}

<style>div {
  margin-bottom: 5px;
}

.state-mang-data {
  padding: 10px;
}

h4 {
  border-bottom: solid 1px var(--toy-lowlight);
  border-top: solid 1px var(--toy-highlight);
  box-shadow: var(--level-2, 0 2px 3px rgba(0, 0, 0, 0.1), 0 1px 5px rgba(0, 0, 0, 0.13));
  font-family: "MonoLisa", monospace;
  text-transform: capitalize;
  padding: 4px 6px;
  cursor: pointer;
  font-size: var(--toy-heading-font-size, 12px);
  margin: 0;
  background: var(--toy-header-bg);
  color: var(--toy-header-color, --toy-color);
}
h4 span {
  display: inline-block;
  font-size: 10px;
  transform: rotate(-90deg);
  transition: 0.2s transform var(--ease_in_out_quint);
}
h4.isOpen span {
  transform: rotate(0turn);
}</style>
