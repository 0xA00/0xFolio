<script>
    import "../app.css";
</script>

<header>
    
</header>
<div class="mainContent">
    <div class="contentHeader">
        <h1>0xa0.dev</h1>
        <span class="delimitor">/</span>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blogs</a>
    </div>
    <slot/>
</div>

<footer>
    <h5> © {new Date().getFullYear()} - 0xa0</h5>
</footer>


<style>
    .mainContent{
        animation: FadeIn 1s;
        width: 90%;
        margin: auto;
        border: 2px solid var(--primary-color);


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
        font-size: 1.5rem;
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
        margin-bottom: 20px;
        gap:calc(1rem + 1vw);
        border-bottom: 1px solid var(--primary-color);
    }

   
</style>


