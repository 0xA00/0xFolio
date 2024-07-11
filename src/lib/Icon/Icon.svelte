<script lang="ts">
	export const alt: string | undefined = undefined
</script>


<span class="icon" aria-label={alt}>
    <slot/>
</span>


<style>
    .icon{
        height: 2em;
        width: fit-content;
   
    }

    .icon :global(img){
        display:block;
        margin:0 auto;
    }
</style>