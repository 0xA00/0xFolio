<script>
	import SvelteMarkdown from "svelte-markdown";

    export let data;
    const source = data.props.blogData.content;



</script>

<h1>{data.props.blogData.title}</h1>
<h3>{data.props.blogData.timeCreated}</h3>

<div class="blogpost">
    <SvelteMarkdown {source}/>
</div>


<style>


</style>