<script context="module">
	export const prerender = true;

	import Auckland from '/src/component/australasia/newzealand/Auckland.svelte';
	import Companies from '/src/component/australasia/newzealand/Companies.svelte';
	import Gazette from '/src/component/australasia/newzealand/Gazette.svelte';
	import Historical from '/src/component/australasia/newzealand/Historical.svelte';
	import State from '/src/component/australasia/newzealand/State.svelte';

</script>

<svelte:head>
	<title>New Zealand</title>
</svelte:head>

<section class="one">
	<h1 class="ml-8 mt-3 inline-block text-center text-purple-500 text-font-sans text-4xl">
		<img
			class="h-10 w-14 inline-block"
			src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1638702403/newzealand-flag_w7h9cg.jpg"
			alt="image of new zealand flag"
		/>
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
    <State />
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
