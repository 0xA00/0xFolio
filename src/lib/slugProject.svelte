<script>
    export let name
    export let githublink
    export let lang


</script>



<div class="project">
    <div class="upPart">
        <h2>{name}</h2>
        <a href={githublink} target="_blank">
            {githublink.replace("https://github.com/", "")}
        </a>
    </div>
    <div class="descPart">
      <slot/>
    </div>
    <div class="langPart">
        {#if lang.includes("javascript")}
            <img src="https://img.shields.io/badge/javascript-ffff00?style=for-the-badge&logo=javascript&logoColor=black" alt="svelte"/>
        {/if}
        {#if lang.includes("svelte")}
            <img src="https://img.shields.io/badge/svelte-ff3e00?style=for-the-badge&logo=svelte&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("typescript")}
            <img src="https://img.shields.io/badge/typescript-007acc?style=for-the-badge&logo=typescript&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("python")}
            <img src="https://img.shields.io/badge/python-3776ab?style=for-the-badge&logo=python&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("C")}
            <img src="https://img.shields.io/badge/c lang-00599c?style=for-the-badge&logo=c&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("c++")}
            <img src="https://img.shields.io/badge/c++-00599c?style=for-the-badge&logo=c&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("java")}
            <img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("html")}
            <img src="https://img.shields.io/badge/html-ff3e00?style=for-the-badge&logo=html5&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("css")}
            <img src="https://img.shields.io/badge/css-007acc?style=for-the-badge&logo=css3&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("rust")}
            <img src="https://img.shields.io/badge/rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="svelte"/>
        {/if}
        {#if lang.includes("c#")}
            <img src="https://img.shields.io/badge/c#-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="svelte"/>
        {/if}
        
        </div>

</div>


<style>

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

        & a{
            color: rgb(201, 201, 201);
            font-weight: 800;
            text-decoration: none;
            margin-bottom: 5px;
            transition: color 0.5s;
            width: fit-content;
        }

        & a:hover{
            color: white;
        }


    
    }

    svg{
        width: 30px;
        height: 30px;
    }

    .project{
        display: flex;
        flex-direction: column;
        background-color: #16161D;
        color: white;
        border-radius: 22px;
        padding: 20px;
        margin: 10px;

        height: 300px;
        overflow: hidden;
    }

    .descPart{
        text-align: start;
        font-weight: 400;
        font-size: 1.5rem;
        
    }

    .langPart{
        width: fit-content;

        margin-top: auto;
    }
</style>


