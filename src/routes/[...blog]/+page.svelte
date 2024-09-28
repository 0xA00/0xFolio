<script>

   export let data;


</script>
<h1>Blog</h1>
<div class="blog">
{#each data.props.blogData as {title, timeCreated,Author,blogfileName}}
    <div class="blogpost">
        <a href="/blog/{blogfileName}">
        <div class="border">
        <h2 class="titleh2">{title}</h2>
        <p>{timeCreated}</p>
        <p><span class="green">Author</span>: { Author}</p>
        </div>
    </a>
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
        gap: 0.5rem;

    }

    .border{
        border: 1px solid var(--background-color);
        padding: 1rem;
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


    a{
        text-decoration: none;

    }
    p{
        font-weight: 500;
        font-size: 1.1em;
        opacity: 0.7;
        margin-bottom: 0;
        margin-top: 0;
        color: white;
    }

    .green{
        color: var(--primary-color);
   }

.border:hover .titleh2 {
    background-color: var(--primary-color);
    width: 100%;
    transition: color 0.5s, background-color 0.5s;
}

.border:hover .titleh2::after {
    content: " →";
    transition: content 0.5s, color 0.5s;
}

.border:hover {
    border-color: white;
    transition: border-color 0.5s;
}

</style>



<svelte:head>
    <title>$./0xa0.sh --blog</title>
</svelte:head>