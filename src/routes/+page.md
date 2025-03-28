<script>
export let data;


import { onMount } from 'svelte';

onMount(() => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (!link.href.includes('/blog')) {
            link.setAttribute('target', '_blank');
        }
    });
});


</script>



Hey, I'm 0xA0, but you can call me 0x.

I'm a recent computer science graduate with a focus on networks and security, actively seeking opportunities as a software engineer. If you're hiring or know of any opportunities, feel free to reach out!

On this page you'll be able to find some of the things I've did! You can also check out my github for more projects. But here are some of my projects: [Projects](/project)

If you want to contact me : 

- [github: [0xA00](https://github.com/0xA00)]
- [x: [@0xA0_](https://twitter.com/0xA0_)]
- [discord: [0xa0](https://discordapp.com/users/298221448642953217)]



You can explore my thoughts and writings here: [Read my blogs](/blog)


***

<div id="row88">
{#each data.images as image}
    <img src={image} alt={image} />
{/each}
</div>







