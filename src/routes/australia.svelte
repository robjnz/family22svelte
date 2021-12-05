<script context="module">
	export const prerender = true;

	import GenSA from '/src/component/australasia/australia/GenSA.svelte';
	import State from '/src/component/australasia/australia/State.svelte';
</script>

<svelte:head>
	<title>Austalia</title>
</svelte:head>

<section class="one">
	<h1 class="ml-8 mt-3 inline-block text-center text-purple-500 text-font-sans text-4xl">
		<img
			class="h-10 w-14 inline-block"
			src="https://res.cloudinary.com/dzhbfdfa5/image/upload/c_scale,h_200,w_300/v1638638952/australia-flag_zwelpx.jpg"
			alt="image of australian flag"
		/>
		Australia Family History Resourses
	</h1>
	<br />

	<div class="grid sm:flex gap-4 mt-20 one">
		<GenSA />
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
