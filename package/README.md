# Svelte Toy

## Demo

https://svelte.dev/repl/4566ac90a5ca42d6ade1c383b6f1ba66?version=3.43.1

`npm install @leveluptuts/svelte-toy`

```svelte
<script>
	import { Toy } from '@leveluptuts/svelte-toy'
	import { writable } from 'svelte/store';

	let example = writable({
		name: 'John',
		isActive: false
	});
</script>

<h1>Hi, my name is {$example.name}</h1>

{#if $example.isActive}
	<p>I'm active</p>
{/if}

<Toy register={[{ example }]} />
```
