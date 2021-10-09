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
  --toy-color-int: var(--toy-color, black);
  --toy-background-int: var(--toy-bg, white);
  --toy-nub-bg: var(--toy-background-int);
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
  border-radius: 15px 0 0 15px;
  box-shadow: var(--level-4, 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22));
  position: absolute;
  padding: 10px;
  right: 100%;
  top: 60px;
  background: var(--toy-nub-bg, #fff);
}

.dark {
  --toy-color: white;
  --toy-background-int: black;
  --toy-nub-bg: var(--toy-background-int);
}

.state-man-wrapper {
  box-shadow: var(--level-4, 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22));
  background: var(--toy-background-int);
  color: var(--toy-color-int);
  overflow: hidden;
  max-height: 80vh;
  overflow-y: scroll;
  border-radius: 10px 0 0 10px;
}

:global(.state-mang) {
  font-size: var(--state-tool-font-size, 14px);
  font-family: "MonoLisa", monospace;
}</style>
