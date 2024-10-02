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

    // Generate a little description of the blog post
    export let imgSet= data.blogData.imgSet || "https://pbs.twimg.com/profile_banners/2746734373/1723453519/600x200";

 



</script>

<h1 id="tilte">{data.blogData.title}</h1>
<h3 id="timecre">{data.blogData.timeCreated}</h3>
<img src={imgSet} alt="blog post image" width="100%" height="auto" />


<div class="blogpost">
  <Markdown {carta} bind:value theme="github" />
</div>



<svelte:head>
    <title>{data.blogData.title}</title>
    <meta name="description" content="0xa0 website blog post" />
    <meta name="author" content="0xa0" />
    <meta name="robots" content="index, follow" />
    <meta name="keywords" content="0xa0, 0xa0 website, 0xa0 projects" />
    <meta name="og:image" content={imgSet}>
	  <meta name="twitter:card" content="summary_large_image">
	  <meta name="twitter:image" content={imgSet}>
	  <meta name="twitter:image:src" content={imgSet}>
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

#timecre{
  opacity: 0.4;
  font-size: 0.9rem;
  margin-top: 0;
}

#tilte{
  color: var(--primary-color);
  margin-bottom: auto;
}




</style>


