<script>
    import Icon from "$lib/Icon/Icon.svelte";
    import Eighteightthreeone from "./Icon/eighteightthreeone.svelte";
    import linksPath from "$lib/Icon/_links88.json"


    import fs from "fs";
const dir = "static/88x31";
const nb = fs.readdirSync(dir);

//create an array with each folder and it's linkspath related
let nbpath = [];
for (let i = 0; i < nb.length; i++){
    nbpath.push({
        nb: nb[i],
        link: linksPath[i]
    })
}

</script>

<div class="all8831">

    {#each nbpath as {nb, link}}
        <Eighteightthreeone nb={nb} link={link}/>
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