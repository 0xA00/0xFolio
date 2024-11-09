<script lang="ts">
    import type { PageData } from './$types';
    export let data : PageData;


</script>



<h1>Blog</h1>
<div class="blog">
{#each data.props.blogData as {title, timeCreated,Author,blogfileName}}
    <div class="blogpost">
        <a href="/blog/{blogfileName}">
        <div class="border">
            <div class="wrapper">
                <div class="background">
                    <h2 class="titleh2">{title}</h2>
            </div>
        </div>
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
        width: 100%;

    }

    .border{
		border-left: 5px solid rgb(from var(--primary-color) r g b / 0.3);
		padding-left: 10px;
		transition: border-left 0.5s;
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
        color: var(--primary-color);
        margin-bottom: 0;
        margin-top: 0;

        
        mix-blend-mode: difference;
		word-break: keep-all;
		white-space: nowrap;

    }


    a{
        text-decoration: none;
    }

    .wrapper{
        width: fit-content;
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

        width: 100%;

}

.border .background{
		background-color: var(--primary-color);
		width: 0%;
		transition: width 0.5s ease;		
	}

    .border:hover .background{
		width: 100%;
	}
 


.border:hover {
    border-left: 5px solid var(--primary-color);
    transition: border-color 0.5s;
}

</style>



<svelte:head>
    <title>$./0xa0.sh --blog</title>
</svelte:head>