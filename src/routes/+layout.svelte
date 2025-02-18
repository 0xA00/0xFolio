<script lang="ts">

import { writable } from 'svelte/store';

import "../app.css";
import { enhance, type SubmitFunction } from '$app/forms';

export let data;


export let themedata = data.theme;


const submitUpdateTheme: SubmitFunction= ({action})=>{
    const theme = action.searchParams.get("theme");
    if(theme){
        document.documentElement.setAttribute("data-theme", theme);
    }
}



const toggleTheme = () => {
    themedata = themedata === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themedata);
}


</script>

<header>
    
</header>
<div class="mainContent">
    <div class="contentHeader">
        <img src="assets/back.jpg" alt="0xa0" id="backresponsiveimg"/>
        <h1>0xa0.dev</h1>

        <form method="POST" use:enhance={submitUpdateTheme}>
            <button class="theme-toggle" formaction="/?/setTheme&theme={themedata}" on:click={toggleTheme}>
                {#if themedata == "light"}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                {/if}
            </button>
        </form>
        
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blogs</a>

       



 <!--   <footer>
        <p>0xa0.dev © {new Date().getFullYear()}</p>
    </footer>
    -->
    </div>
    <main id="slotDiv">
    <slot/>
    </main>
</div>




<style>

.theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            color: var(--primary-color);
            transition: color 0.3s ease;
            }
            .theme-toggle:hover {
            color: var(--secondary-color);
            }
            
    .mainContent{
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }

        animation: FadeIn 1s;

        height: auto;
        

 

        max-width: 65rem;
        


       

        @media (min-width: 768px){
            height: calc(100dvh - 5rem)
        };

        @media (max-width: 768px){
            height: calc(100dvh - 5rem)
        }

    }


    #backresponsiveimg{
        display: none;
        @media (min-width: 768px){
            display: block;
            width: 100%;
            height: auto;
            max-width: 10rem;
            margin-bottom: 0.5rem;
        }
    }
    #slotDiv{

        height: auto;
        overflow-y: auto;
        flex: 1 1 0%;
        padding: 1rem;
        max-width: 85rem;

        

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
    h1{
        font-size: 1.2rem;
        @media (min-width: 768px) {
            margin-bottom: 0;
            margin-top:0;
        }

    }

    a{
        text-decoration: none;
        color: var(--secondary-color);
        font-size: 1rem;
        transition: color 0.5s;
        cursor: url(../wii-pointer-blue-ccw.cur), pointer;
    }


    a:hover{
        color: var(--primary-color);
        
    



    }
    

    .contentHeader{
        display: flex;
        flex-direction: row;
        @media (min-width: 768px) {
            flex-direction: column;
        }

        @media (min-width: 768px) {
            border-right: 2px solid var(--primary-color);
        }
        @media (max-width: 768px) {
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 1rem;
            align-items: center;
            justify-content: center;
        }
        padding-right: 0.5rem;
        margin-right: 1rem;
        


        

        

        gap:0.75rem;
        /*border-bottom: 1px solid var(--primary-color);*/


        & > a{
            font-size: .75rem;
            font-weight: 100;
            
        }
    }

   
</style>


