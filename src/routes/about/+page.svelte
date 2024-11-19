<script>
	import HeatMap from "$lib/heatMap.svelte";

</script>

<h1>About me</h1>


<div class="userImg">
    <img src="/assets/pfp.png" alt="avatar" />
</div>
<!--
<div class="userName">
    <div id="sentenceuser"><h2>Hi ! I'm <span id="user">0xa0</span> !</h2><h4>She/her</h4></div>
<h3>{~~(Math.floor((new Date() - new Date(2002, 10, 7)) / (365.25 * 24 * 60 * 60 * 1000)))} yrs old French developer</h3>

</div>

-->

<p>Hey ! I'm <span class="highlight">0xa0</span> (or you can call me 0x), a {Math.floor(Number(new Date() - new Date(2002, 10, 7)) / (365.25 * 24 * 60 * 60 * 1000))} years old French developer.</p>

<p>
    To put it simple, I'm a freshly graduated student from Montpellier-Sète University in computer science. 

</p>

<p>
    Right now I'm looking for a job or an internship in the field of cybersecurity or web development.
</p>

<p>
    Outside of tech, I like to play video games, listen to music and watching anime. 
</p>

<p>
    If you want you can find me on <a href="https://x.com/0xA0_" target="_blank">Twitter</a>, <a href="https://github.com/0xA00" target="_blank">Github</a> or even on <a href="https://discordapp.com/users/298221448642953217">Discord</a>. 
</p>

<p>
    I love to do silly project like scanning the Internet for Minecraft servers. I'm also a member of Wavetech, a technical Minecraft server I play on since August 2023.
</p>

<h2>Programming skills</h2>
<p>
    I'm not going to list all the languages I know, but here are the main ones I use :
</p>
<ul>
   <li>Java</li>
    <li>Python</li>
    <li>C</li>
    <li>Rust</li>
    <li>Web languages like HTML, CSS, JS and frameworks like Svelte or Vuejs</li>
    
</ul>


<img id="ascii" src="/assets/ascii.png" alt="Ascii screen" style="margin: 1rem 0;">









<!-- 



<p>I mainly do Minecraft related things and I try to learn new things.</p>
<p>I live in France but I'm okay with moving to another country if I have to, I'm currently finishing my last year of computer science at the University of Montpellier-Sète.</p>





<h1>
    My interests
</h1>

<p>
    I could talk a lot about what I like, but I'm going to try to keep it short and simple :
</p>

<ul>
    <li>Programming</li>
    <li>Video games</li>
    <li>Music</li>
    <li>Art</li>

</ul>

<p>
    I'm also interested about learning new things, so if you want to talk about anything , feel free to contact me !
</p>

<h1>
    My skills
</h1>

<p>
    Recently I've been working a lot with web languages like HTML, CSS, JS and framework like Svelte or Vuejs. But I also have some experience with Java, Python, C and Rust.
    I want to learn more about Rust and Go in the future and I also want to learn more about web security as I'm really interested in this field.
</p>

-->




<style>


.highlight {
    color: var(--primary-color);
}


ul {            
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
}

li {
    position: relative;
    padding-left: 1.5em;
    margin-bottom: 0.5em;
    line-height: 1.4;
}

li:before {
    content: '>';
    position: absolute;
    left: 0;
    color: var(--primary-color);
}

li:hover:before {
    color:var(--primary-color);
    filter: hue-rotate(90deg);
    transform: translateX(3px);
    transition: transform 0.2s ease;
}



    a {
        text-decoration: none;
        color: var(--primary-color);
        transition: color 0.3s;
        border-bottom: 1px dashed var(--primary-color);
    }

    a:hover {
        color: var(--primary-color);
        border-bottom: 1px dashed var(--primary-color);
        filter: hue-rotate(90deg);
    }

    p {
        text-align: justify;
    }

    .userImg {
        max-width: 200px;
        margin: 0 2rem 1rem 0;
        float: left;
    }

    .userImg img {
        width: 100%;
        height: auto;
    }

    @media (max-width: 600px) {
        .userImg {
            float: none;
            margin: 1rem auto;
        }
    }


</style>


<svelte:head>
    <title>$./0xa0.sh --about</title>
</svelte:head>