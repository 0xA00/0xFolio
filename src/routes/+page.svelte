<script>
	import EvaImg from "$lib/EvaImg.svelte";
	import Eighteightthreeone from "$lib/Icon/eighteightthreeone.svelte";


	import ListOfProjects from "$lib/ListOfProjects.svelte";
import ListSocials from "$lib/listSocials.svelte";
import UsrNimg from "$lib/UsrNimg.svelte";

</script>


<div class="godrays"></div>

<UsrNimg />

<Eighteightthreeone />

<ListSocials />

<EvaImg />

<ListOfProjects />



<svelte:head>
	<title>0xa0 Portfolio</title>
	<meta name="description" content="0xa0's portfolio">
	<meta name="keywords" content="0xa0, 0xa0 website, 0xa0 projects">
	<!-- have a big ass gif of a spinning blahaj-->
	<meta name="og:image" content="%sveltekit.assets%/blahaj.webp">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image:src" content="%sveltekit.assets%/blahaj.webp">

	
	<link rel="icon" type="image/webp" href="blahaj.webp">
</svelte:head>