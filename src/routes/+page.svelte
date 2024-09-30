<script>
	import EvaImg from "$lib/EvaImg.svelte";
import ListOf88 from "$lib/ListOf88.svelte";




</script>

<div class="homeDiv">
	<div>
	<h1> Hi :3</h1>
	<p>I'm <span id="OxName">0xa0</span>, a  {~~(new Date().getFullYear()-new Date(2002, 11, 7)/31557600000)-1970} year old developer and I mainly do Minecraft related things and I try to learn new things.</p>
	<p>this website is heavily inspired by <a href="https://x.com/soraschizoid" target="_blank">Soraschizoid</a> and it is made using <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>, I intend to use this website as a portfolio but also a place where I can show my projects and write some blogs
	about what I do in general. Not all of my projects will be displayed here as some of them can't be even called projects.</p>

	<div>
		<img src="https://imgur.com/GTweN4M.gif" alt="header" width="100%" height="auto" />
	</div>
	
	<p>If you want to contact me, you can do so by sending me a DM on <a href="https://discordapp.com/users/298221448642953217">Discord</a>, and you can also find me on Twitter <a href="https://twitter.com/0xa0_" target="_blank">@0xa0_dev</a> and <a href="https://github.com/0xA00">Github</a>.</p>

	<p> Current interests : </p>
	<ul>
		<li>Rust and Go</li>
		<li>Minecraft modding</li>
		<li>web development in general</li>
	</ul>
	</div>
	<div>
		<p>You can find my projects <a href="/projects">here</a> and my blog <a href="/blog">here</a></p>
	</div>


	<div>
		<ListOf88/>
	</div>
	
</div>




<svelte:head>
	<title>$./0xa0.sh -v</title>
	<meta name="description" content="0xa0's portfolio, I mainly do Minecraft related things and I try to learn new things :3">
	<meta name="keywords" content="0xa0, 0xa0 website, 0xa0 projects">
	<!-- have a big ass gif of a spinning blahaj-->
	<meta name="og:image" content="/blahahicon.gif">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image" content="/blahahicon.gif">
	<meta name="twitter:image:src" content="/blahahicon.gif">
</svelte:head>


<style>


	#OxName{
		color:var(--primary-color);
	}



	.homeDiv{
		
		margin: auto;
		text-wrap: wrap;
	}
	
	h1{
		color: var(--primary-color);
	}
	h2{
		color: var(--primary-color);
		font-weight: 500;
	
	}

	
	a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s;
    border-bottom: 1px dashed var(--primary-color);
}

a:hover {
    color: lightblue;
    border-bottom: 1px dashed lightblue;
}


	


	


	.homeDiv > div:not(:last-child)::after{
		content:"";
		display: block;
		width: 100%;
		height: 1px;
		background-color: var(--primary-color);
		opacity: 0.7;
		margin-top:1rem;
		margin-bottom: 1em;
		
	}



</style>

