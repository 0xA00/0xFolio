<script>



    export let data;
    let source = data.props.blogData.content;


    



</script>

<h1>{data.props.blogData.title}</h1>
<h3>{data.props.blogData.timeCreated}</h3>

<div class="blogpost">
    <div class="blogcontent" contenteditable="false" bind:innerHTML={source}></div>
</div>



<svelte:head>
    <title>{data.props.blogData.title}</title>
</svelte:head>