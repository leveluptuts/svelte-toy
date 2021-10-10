<script>
	import Toy from '$lib/Toy.svelte';
	import { writable } from 'svelte/store';

	let example = writable({
		name: 'Jonas',
		isActive: false,
		test: [
			{
				hi: 'hi',
				hello: 'hello',
				world: {
					what: 'is up'
				}
			}
		],
		some: {
			thing: 'thing'
		},
		justArray: [0, 1, 2, 3]
	});

	let singleValue = writable('hi');
	let singleObj = writable({ test: 'hi' });
</script>

<h1>This is the Svelte Toy Demo</h1>
<h2>Hi, my name is {$example.name}</h2>
{#if $example.isActive}
	<p>I'm active</p>
{/if}

{$example.test[0].world.what}

<div class="state-example">
	<pre>{JSON.stringify($example, null, 2)}</pre>
</div>
<div class="state-example">
	<pre>{JSON.stringify($singleValue, null, 2)}</pre>
</div>
<div class="state-example">
	<pre>{JSON.stringify($singleObj, null, 2)}</pre>
</div>

<Toy theme="dark" register={[{ example }, { singleValue }, { singleObj }]} />

<style>
	.state-example {
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px;
		background: #eee;
	}
</style>
