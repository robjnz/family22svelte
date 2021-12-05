<script context="module">
	export const prerender = true;

	import Auckland from '../component/australasia/Zealand/Auckland.svelte';
	import Companies from '../component/australasia/Zealand/Companies.svelte';
	import Gazette from '../component/australasia/Zealand/Gazette.svelte';
	import Historical from '../component/australasia/Zealand/Historical.svelte';

</script>

<svelte:head>
	<title>New Zealand</title>
</svelte:head>

<section class="one">
	<h1 class="ml-8 mt-3 inline-block text-center text-purple-500 text-font-sans text-4xl">
		New Zealand Family History Resourses
	</h1>
	<br />

	<div class="grid sm:flex gap-4 mt-20 one">
		<Auckland />
		<Companies />
		<Gazette />
	</div>

	<div class="grid sm:flex gap-4 mt-8 one">
		<Historical />
		
	</div>
</section>

<style>
	.one {
		text-align: center;
		margin-top: 50px;
		margin-left: 100px;
		margin-right: 100px;
	}
</style>
