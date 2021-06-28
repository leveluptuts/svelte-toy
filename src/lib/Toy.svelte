<script lang="ts">
	import StateMangInput from './ToyInput.svelte';
	import Portal from 'svelte-portal/src/Portal.svelte';

	export let register;
	export let active = false;
	let data = register.map((store) => {
		return {
			label: Object.keys(store)[0],
			store: store[Object.keys(store)[0]]
		};
	});
</script>

<Portal>
	<div class="state-mang" class:active>
		<div class="nub" on:click={() => (active = !active)}>🧰</div>
		<div class="state-man-wrapper">
			{#each data as { store, label }, index}
				<StateMangInput isOpen={index === 0} {store} {label} />
			{/each}
		</div>
	</div>
</Portal>

<style lang="scss">
	.state-mang {
		transition: transform 0.2s var(--ease-in-out-quint);
		transform: translate3d(100%, 0, 0);

		position: fixed;
		top: 10%;
		right: 0;
		width: 300px;
		z-index: 2001;

		&.active {
			transform: translate3d(0, 0, 0) scale(1.05);
		}

		.nub {
			border-radius: 15px 0 0 15px;
			box-shadow: var(--level-4);
			position: absolute;
			padding: 10px;
			right: 100%;
			top: 60px;
			background: var(--state-tool-bg, #fff);
		}
	}

	.state-man-wrapper {
		box-shadow: var(--level-4, 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22));
		background: white;
		overflow: hidden;
		max-height: 80vh;
		overflow-y: scroll;
		border-radius: 10px 0 0 10px;
	}

	:global(.state-mang) {
		font-size: var(--state-tool-font-size, 14px);
		font-family: 'MonoLisa', monospace;
	}
</style>
