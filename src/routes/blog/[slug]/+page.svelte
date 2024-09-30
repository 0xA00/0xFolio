<script lang="ts">


  import { Carta, Markdown} from 'carta-md';

	import { code } from '@cartamd/plugin-code';

  import './github.scss';




  const carta = new Carta({
  sanitizer: false,
  extensions: [code({
    theme: 'github-dark'
  })
],
shikiOptions: {
    themes: ['github-dark']
  }
});




    export let data;
    export let value = data.blogData.content;
    //generate a little description of the blog post
    let description = value.slice(0, 100) + "...";
 



</script>

<h1>{data.blogData.title}</h1>
<h3>{data.blogData.timeCreated}</h3>

<div class="blogpost">
  <Markdown {carta} bind:value theme="github" />
</div>



<svelte:head>
    <title>{data.blogData.title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="0xa0, 0xa0 website, 0xa0 projects" />
</svelte:head>


<style>
	:global(pre) {
    max-width: fit-content;
    padding: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    text-wrap: auto;
  }

  :global(pre code) {
    font-size: 0.9rem;
  }

* {
  font-family:"Space Opera", 'Inter', sans-serif;
}




</style>


