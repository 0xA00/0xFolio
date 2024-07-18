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
        max-width: 56rem;
        margin-left: auto;
        margin-right: auto;
        border: 2px solid var(--primary-color);
       

        @media (min-width: 768px){
            height: calc(100dvh - 7rem)
        };

        @media (max-width: 768px){
            height: calc(100dvh - 7rem)
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

    footer h5{
        margin-bottom: 0;
    }

    h1, .delimitor, a{
        font-weight: 700;
        font-size: 1rem;
        color: var(--primary-color);
        
    }

    a{
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        &::before{
            content: "(";
        }
        &::after{
            content: ")";
        }
    
    }


    a:hover{
        color: rgb(109, 109, 109);
        
        cursor: pointer;

        &::before{
            content: "[";
        }
        &::after{
            content: "]";
        }
        
    }
    

    .contentHeader{
        display: flex;
        align-items: center;
        padding: 0.75rem 1.5rem;

        gap:calc(1rem + 1vw);
        border-bottom: 1px solid var(--primary-color);
        flex-wrap: wrap;

        & > a{
            font-size: .75rem;
        }
    }

   
</style>


