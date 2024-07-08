<script>
    import project from "$lib/_projects.json"
	import SlugProject from "./slugProject.svelte";

</script>



<fieldset>
    <legend><h2>Projets / Contributions</h2></legend>

    <div class="projects">
    {#each project as {name, source, languages,description}}
        <SlugProject name={name} githublink={source} lang={languages}>
            {description}
        </SlugProject>
    {/each}
    </div>










</fieldset>



<style>     
    h2{
        background-color: rgb(27, 27, 27);
        color: white;
        width: fit-content;
        padding: 5px 10px 5px 10px;
        border-radius: 12px;
        
    }

    fieldset{
        border: 5px solid black;
        border-radius: 12px;
        padding: 20px;
        width: fit-content;

    }


    .projects{
     
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        justify-content: center;
    }
 
</style>