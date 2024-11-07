<script>
	import project from '$lib/_projects.json';
	import SlugProject from './slugProject.svelte';
</script>

<div class="projects">
	{#each project as { name, source, languages, description }}
		<SlugProject {name} githublink={source} lang={languages}>
			{description}
		</SlugProject>
	{/each}
</div>
