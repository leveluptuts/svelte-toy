<script>import ToyGroup from './ToyGroup.svelte';
import { SideMenu } from '@leveluptuts/svelte-side-menu';
export let top = '10%';
export let register;
export let nub = '🧰';
export let theme = '';
let keys = Object.keys(register);
let data = keys.map((key) => {
    return {
        label: key,
        store: register[key]
    };
});
</script>

<SideMenu {theme} {nub} {top} links={[]}>
	<div class={`state-mang ${theme}`}>
		{#each data as { store, label }, index}
			<ToyGroup isOpen={index === 0} {store} {label} />
		{/each}
	</div>
</SideMenu>

<style>.state-mang {
  --toy-value-color: hsla(310, 99%, 44%, 1);
  --toy-key-color: hsla(208, 99%, 33%, 1);
}

.dark {
  --toy-color: hsla(0, 0%, 80%, 1);
  --toy-background-int: hsla(241, 6%, 15%, 1);
  --toy-nub-bg: var(--toy-background-int);
  --toy-highlight: hsla(0, 0%, 25%, 1);
  --toy-lowlight: hsla(0, 0%, 5%, 1);
  --toy-header-bg: hsla(0, 0%, 10%, 1);
  --toy-value-color: hsla(310, 99%, 74%, 1);
  --toy-key-color: hsla(208, 99%, 73%, 1);
}

:global(.state-mang) {
  font-size: var(--state-tool-font-size, 14px);
  font-family: "MonoLisa", monospace;
}</style>
