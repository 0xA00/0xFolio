<script>
    import project from "$lib/_projects.json"
	import SlugProject from "./slugProject.svelte";

</script>

<h1>Recent projets / contributions</h1>

<div class="projects">
<!--First 4 projects-->
{#each project.slice(0,4) as {name, source, languages,description}}
<a href={source}>
    <SlugProject name={name} githublink={source} lang={languages}>
        {description}
    </SlugProject>
</a>
{/each}

<p>If you want to see more of my projects, you can check out my <a href="/projects">projects page</a></p>
</div>



<style>
    a{
        text-decoration: none;
     

    }

    a:hover{
        cursor: pointer;

        /*make sure the person KNOW that they can click on the link*/
        & > *{
            color: var(--primary-color);
        }
    }

    a:not(:last-child)::after{
        content:"";
		display: block;
		width: 80%;
		height: 1px;
		background-color: var(--primary-color);
		opacity: 0.4;
		margin-top:1rem;
		margin-bottom: 1em;
    }

    a{
		text-decoration: none;
		color: var(--primary-color);
		transition: color 0.5s;
		transition: background-color 0.5s;

		&::after{
			content: " ↱";
		}
	}

	a:hover{
		color:black;
		background-color: var(--primary-color);

	}

</style>