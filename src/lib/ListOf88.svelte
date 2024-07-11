<script>
    import Icon from "$lib/Icon/Icon.svelte";
    import Eighteightthreeone from "./Icon/eighteightthreeone.svelte";
    import linksPath from "$lib/Icon/_links88.json"



</script>

<div class="all8831">

    
    {#each linksPath as link}
        <Eighteightthreeone nb={link.name} link={link.path} />
    {/each}
    

</div>



<style>
    .all8831{
        display: flex;
        flex-direction: row;
        width: fit-content;
        flex-wrap: wrap;
        gap: 5px;

    }
</style>