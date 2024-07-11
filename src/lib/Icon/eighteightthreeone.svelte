<script>
    import Icon from "./Icon.svelte";
    export let nb;
    export let link;
    let nbpath = "88x31/"+nb;

</script>

<Icon alt="eighteightthreeone">
    {#if link!= ""}
    <a href={link}>
        <img src={nbpath} alt="88x31" />
    </a>
    {/if}
    {#if link == ""}
    <img src={nbpath} alt="88x31" />
    {/if}
        
</Icon>