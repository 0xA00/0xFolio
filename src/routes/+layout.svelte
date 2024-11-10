<script>

import "../app.css";

</script>

<header>
    
</header>
<div class="mainContent">
    <div class="contentHeader">
        <h1>0xa0.dev <span class="delimitor">$~</span></h1>
        
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blogs</a>
    </div>
    <main id="slotDiv">
    <slot/>
    </main>
</div>

<footer>
	<p>0xa0.dev © {new Date().getFullYear()}</p>
</footer>


<style>
    .mainContent{
        display: flex;
        flex-direction: column;
        animation: FadeIn 1s;
        max-width: 45rem;
        margin-left: auto;
        margin-right: auto;
       
        border-bottom: 2px solid var(--primary-color);
       

        @media (min-width: 768px){
            height: calc(100dvh - 5rem)
        };

        @media (max-width: 768px){
            height: calc(100dvh - 5rem)
        }

    }

    #slotDiv{

        height: auto;
        overflow-y: auto;
        flex: 1 1 0%;
        padding: 1rem;

        

    }



    @keyframes FadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    

    footer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: var(--primary-color);

    }

    footer p{
        margin-bottom: 0;
        margin-top: 10px;
    }

    h1, .delimitor, a{
        font-weight: 700;
        font-size: 1rem;
        color: var(--primary-color);
        
    }

    a{
        text-decoration: none;
        color: var(--secondary-color);
        font-size: 1.2rem;
        transition: color 0.5s;



        

    }


    a:hover{
        color: var(--primary-color);
        
        cursor: pointer;



    }
    

    .contentHeader{
        display: flex;
        align-items: center;
        padding-bottom: 0.75rem;

        gap:0.75rem;
        border-bottom: 1px solid var(--primary-color);
        flex-wrap: wrap;

        & > a{
            font-size: .75rem;
            font-weight: 100;
            line-height: 1rem;
        }
    }

   
</style>


