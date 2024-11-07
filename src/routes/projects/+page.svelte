<script>
	import ListOfProjects from '$lib/ListOfProjects.svelte';
</script>

<h1>Projects</h1>

<ListOfProjects />

<svelte:head>
	<title>$./0xa0.sh --projects</title>
</svelte:head>

<style>
	h1 {
		color: var(--primary-color);
		font-size: 2rem;
	}
</style>
