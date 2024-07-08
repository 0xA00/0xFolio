<script lang="ts">
	export const alt: string | undefined = undefined
</script>


<span class="icon" aria-label={alt}>
    <slot/>
</span>


<style>
    .icon{
        height: 2em;
        width: 2em;
        display: block;
    }

    .icon :global(img){
        display:block;
        margin:0 auto;
    }
</style>