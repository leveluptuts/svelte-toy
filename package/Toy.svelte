<script >import ToyGroup from './ToyGroup.svelte';
export let register;
export let icon = '🧰';
export let active = false;
export let theme = '';
let data = register.map((store) => {
    return {
        label: Object.keys(store)[0],
        store: store[Object.keys(store)[0]]
    };
});
</script>

<div class={`state-mang ${theme}`} class:active>
	<div class="nub" on:click={() => (active = !active)}>{icon}</div>
	<div class="state-man-wrapper">
		{#each data as { store, label }, index}
			<ToyGroup isOpen={index === 0} {store} {label} />
		{/each}
	</div>
</div>

<style >.state-mang {
  --toy-color-int: var(--toy-color, hsla(0, 0%, 20%, 1));
  --toy-background-int: var(--toy-bg, white);
  --toy-header-bg: hsla(0, 0%, 95%, 1);
  --toy-highlight: hsla(0, 0%, 98%, 1);
  --toy-lowlight: hsla(0, 0%, 90%, 1);
  --toy-value-color: hsla(310, 99%, 44%, 1);
  --toy-key-color: hsla(208, 99%, 33%, 1);
  transition: transform 0.2s var(--ease-in-out-quint, cubic-bezier(0.83, 0, 0.17, 1));
  transform: translate3d(100%, 0, 0);
  position: fixed;
  top: 10%;
  right: 0;
  width: var(--toy-width, 300px);
  z-index: var(--toy-z, 2001);
}
.state-mang.active {
  transform: translate3d(0, 0, 0) scale(1.05);
}
.state-mang .nub {
  border-bottom: solid 1px var(--toy-lowlight);
  border-right: solid 1px var(--toy-lowlight);
  border-top: solid 1px var(--toy-highlight);
  border-radius: 5px 0 0 5px;
  box-shadow: var(--level-4, -6px 14px 28px rgba(0, 0, 0, 0.1), -6px 10px 10px rgba(0, 0, 0, 0.12));
  position: absolute;
  padding: 10px;
  right: 100%;
  top: 20px;
  background: var(--toy-nub-bg, var(--toy-header-bg));
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

.state-man-wrapper {
  border-left: solid 1px var(--toy-highlight);
  box-shadow: var(--level-4, 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22));
  background: var(--toy-background-int);
  color: var(--toy-color-int);
  overflow: hidden;
  max-height: 90vh;
  overflow-y: scroll;
  border-radius: 5px 0 0 5px;
}

:global(.state-mang) {
  font-size: var(--state-tool-font-size, 14px);
  font-family: "MonoLisa", monospace;
}</style>
