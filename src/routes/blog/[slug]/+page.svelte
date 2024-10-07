<script lang="ts">


  import { Carta, Markdown} from 'carta-md';

	import { code } from '@cartamd/plugin-code';

  import { math } from '@cartamd/plugin-math';

  import './github.scss';

  import 'katex/dist/katex.css';




  const carta = new Carta({
  sanitizer: false,
  extensions: [code({
    theme: 'github-dark'
  }), math()
],
shikiOptions: {
    themes: ['github-dark']
  }
});




    export let data;
    export let value = data.blogData.content;
    //generate a little description of the blog post, to do that we take the first 100 characters of the blog post 
    const cleanContent = value.replace(/^#{1,6}\s+/gm, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').replace(/!\[([^\]]+)\]\([^\)]+\)/g, '').replace(/```[\s\S]*?```/g, '') 
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^[\*\-+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/^>\s+/gm, '')
    .replace(/^(?:[-*_]){3,}\s*$/gm, '')
    .replace(/^\|(.+)\|$/gm, '$1')
    .replace(/^[-:| ]+$/gm, '');

    const trimmedContent = cleanContent.replace(/\s+/g, ' ').trim();

    // Tronquer à la longueur maximale
  let description = trimmedContent.slice(0, 100);
  
  // S'assurer que la description ne coupe pas un mot
  if (description.length === 100) {
    const lastSpaceIndex = description.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) {
      description = description.slice(0, lastSpaceIndex);
    }
  }
  
  // Ajouter des points de suspension si le texte a été tronqué
  if (description.length < trimmedContent.length) {
    description += '...';
  }




    export let imgSet= data.blogData.imgSet || "https://pbs.twimg.com/profile_banners/2746734373/1723453519/600x200";

 



</script>

<h1 id="tilte">{data.blogData.title}</h1>
<h3 id="timecre">Published {data.blogData.timeCreated}</h3>
<img src={imgSet} alt="blog post image" style="width: 100%; height: auto;" />



<div class="blogpost">
  <Markdown {carta} bind:value theme="github" />
</div>



<svelte:head>
    <title>{data.blogData.title} | 0xa0.dev</title>
    <meta name="description" content={description} />
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

  :global(pre > code) {
    font-size: 0.9rem;
  }





* {
  font-family:Arial,"Space Opera", 'Inter', sans-serif;
  line-height: 1.5;
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


