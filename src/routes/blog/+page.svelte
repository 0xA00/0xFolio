<script>

   export let data;
   console.log(data);


</script>
<h1>Blog</h1>
<div class="blog">
{#each data.props.blogData as {title, timeCreated,Author,blogfileName}}
    <div class="blogpost">
       <a href="/blog/{blogfileName}"> <h2 class="titleh2">{title}</h2> </a>
        <p>{timeCreated}</p>
        <p><span class="green">Author</span>: { Author}</p>
    </div>
    
{/each}
</div>


<style>
   

    .blog{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width:95%;
        margin: auto;
    }


    .blogpost{
        display: flex;
        flex-direction: column;

    }

    .blogpost:not(:last-child)::after{
        content:"";
        display: block;
        width: 100%;
        height: 1px;
        margin-top: 1rem;
        background-color: var(--primary-color);
        opacity: 0.7;
    }

    .titleh2{


        width: fit-content;
        color:white;
        margin-bottom: 0;
        margin-top: 0;
        transition: color 0.5s;
    }

    .titleh2:hover{
        color: black;
    }

    a{
        text-decoration: none;
        color: var(--secondary-color);
        font-size: 1.2rem;
        transition: color 0.5s;
        transition: background-color 0.5s;
        width: fit-content;
    }

    a:hover{
        color: black;
        background-color: var(--primary-color);
    }

    p{
        font-weight: 500;
        font-size: 1.1em;
        opacity: 0.7;
        margin-bottom: 0;
        margin-top: 0;
    }

    .green{
        color: var(--primary-color);
   }


</style>



<svelte:head>
    <title>$./0xa0.sh --blog</title>
</svelte:head>