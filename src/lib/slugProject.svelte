<script>
    export let name
    export let githublink
    export let lang

    //please add a space after the , in the lang attribute
    //it's just it's disgusting to see the comma stick to the language name
    //I'm sorry, I'm a perfectionist
    //lang is an array of languages

    let formattedLang = lang.join(", ")
    //add a Caps to the first letter of each language
    formattedLang = formattedLang.replace(/\b\w/g, l => l.toUpperCase());




</script>



<div class="project">
    <a href={githublink} target="_blank" class="slug">
        
    <div class="upPart">
        <h2>{name}</h2>
       
       <span class="link">{githublink.replace("https://github.com/", "")}</span>
        
    </div>
    <div class="descPart">
      <slot/>
    </div>

    {#if lang}
    <div class="langPart">
        <span>{formattedLang}</span>
    </div>
    {/if}


    </a>
    

</div>


<style>

    .slug{
        text-decoration: none;
        color: white;
        transition: color 0.5s;
    }

    .slug:hover{
        color: var(--primary-color);
    }

    .upPart{
        display: flex;
        justify-content:flex-start;
        flex-direction: column;
        
        
        gap: 10px;
        height: fit-content;
        
        & h2 {
            margin-top: 0;
            margin-bottom: 0;
        }

        & .link{
            
            font-weight: 800;
            text-decoration: none;
            margin-bottom: 5px;
            display: flex;
            flex-direction: row;
        } 


       
     



    
    }

    .langPart{
        display: flex;
        justify-content: flex-end;
        font-weight: 800;
        font-size: 1rem;
        margin-top: 1rem;
    }

    .project{
        display: flex;
        flex-direction: column;
        background-color: var(--background-color);
        color: white;
        border-radius: 22px;
        padding: 20px;
        margin: 10px;

        overflow: hidden;
    }

    .descPart{
        text-align: start;
        font-weight: 400;
        font-size: 1rem;
        padding-bottom: 1rem;
        
    }

    .project:not(:last-child)::after{
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


