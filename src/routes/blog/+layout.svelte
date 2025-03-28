<script>
    import { onMount } from 'svelte';
    
    export let data;
    let sidebarHidden = false;
    
    onMount(() => {
        sidebarHidden = document.body.classList.contains('sidebar-hidden');
    });

    data.data = data.data.map(post => {
        return { ...post, name: post.name.replace(/\.md$/, '') };
    });

    data.data = data.data.map(post => {
        return { ...post, path: post.path.replace(/^posts\//, '') };
    });
    function toggleSidebar() {
        sidebarHidden = !sidebarHidden;
        document.body.classList.toggle('sidebar-hidden');
    }
    
    
</script>

<div id="layout">
    <div id="upperLeftSide">
        <div id="leftSide">
            <div id="divHome">  
                <button id="homeButton" on:click={() => (window.location.href = '/')}>Home</button>
            </div>
            <h3>Blogs</h3>
            
            <lu>
                <li><a href="/blog"> main </a></li>
                {#each data.data as post}
                    <li><a href="/blog/{post.path}">{post.name.replace(/\.md$/, '')}</a></li>
                {/each}
            </lu>
            
        </div>
        <div>
            <button on:click={toggleSidebar} id="hideButton">
                {#if sidebarHidden}
                    <span>&gt;</span>
                {:else}
                    <span>&lt;</span>
                {/if}
            </button>
        </div>
    </div>

    <div id="slotMain">
        <slot />
    </div>
</div>

<style>
a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease-in-out;
}

a:hover {
    filter: brightness(0.6);
}

#layout {
    display: flex;
    flex-direction: row;
    height: 80vh;
    width: 100%;
}

#upperLeftSide {
    display: flex;
    flex-direction: row;
    height: 100%;
    margin-right: 0.5em;
}

body.sidebar-hidden #upperLeftSide {
    margin-right: 0.5em;
}

#leftSide {
    display: flex;
    flex-direction: column;
    border-right: 2px solid var(--primary-color);
    height: 100%;
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
    width: 100%;
    opacity: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    z-index: 2;
}

#leftSide.hidden {
    width: 0;
    opacity: 0;
    overflow: hidden;
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

#slotMain {
    width: calc(100%);
    overflow-y: auto;
    overflow-x: hidden;
    word-wrap: break-word;
    white-space: normal;
    font-size: x-small;
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
    position: relative;
    z-index: 1;
}

#slotMain p {
    font-size: 0.8rem;
}

#leftSide.hidden ~ #slotMain {
    width: 100%;
    transition: width 0.3s ease-in-out;
}

lu {
    list-style-type: none;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}

#hideButton {
    background-color: var(--background-color);
    margin-top: 0.4rem;
    padding-top: 0;
    padding-bottom: 0;
    border-left: none;
    position: sticky;
    top: 0;
    z-index: 10;
}

button {
    color: var(--primary-color);
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    border: 2px solid var(--primary-color);
    margin-left: -2px;
    position: relative;
    left: 0;
    transition: left 0.3s ease-in-out;
}

#leftSide.hidden + div button {
    left: 0;
    transition: left 0.3s ease-in-out;
}

#divHome {
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    color: var(--primary-color);
    border: none;
    width: 100%;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    border-bottom: 2px solid var(--primary-color);
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

#homeButton {
    color: var(--primary-color);
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1rem;
    margin-left: -2px;
    position: relative;
    left: 0;
    transition: left 0.3s ease-in-out, color 0.3s ease-in-out;
}

#homeButton:hover {
    color: var(--secondary-color);
    transition: color 0.3s ease-in-out;
}

/* Media query for small screens */
@media (max-width: 600px) {
    #layout {
        position: relative;
    }
    #leftSide {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 70%; /* Adjust as needed */
        background: var(--background-color);
        z-index: 2;
    }
    #slotMain {
        position: relative;
        z-index: 1;
    }
}

</style>
