<script>
    import Icon from "./Icon.svelte";
    export let nb;
    export let link;
    let nbpath = "88x31/"+nb;
    console.log(nbpath);
    console.log(link);

</script>

<Icon alt="eighteightthreeone">
    {#if link.path != ""}
    <a href={link}>
        <img src={nbpath} alt="88x31" />
    </a>
    {/if}
    {#if link.path == ""}
    <img src={nbpath} alt="88x31" />
    {/if}
        
</Icon>