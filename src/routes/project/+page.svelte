<script>
    import { onMount } from 'svelte';

    export let data;
    let JsonData = data.jsonData;
    let selectedProject = null;
    let showCopyPopup = false;

    function openPopup(project) {
        selectedProject = project;
        history.replaceState(null, "", `?project=${encodeURIComponent(project.name)}`);
    }

    function closePopup() {
        selectedProject = null;
        history.replaceState(null, "", window.location.pathname);
    }

    async function copyProjectLink() {
        if (selectedProject) {
            const url = window.location.origin + window.location.pathname + `?project=${encodeURIComponent(selectedProject.name)}`;
            try {
                await navigator.clipboard.writeText(url);
                // Show the copy notification
                showCopyPopup = true;
                // Hide the notification after 2 seconds
                setTimeout(() => {
                    showCopyPopup = false;
                }, 2000);
            } catch (err) {
                console.error("Failed to copy: ", err);
            }
        }
    }

    onMount(() => {
        const params = new URLSearchParams(window.location.search);
        const projectName = params.get('project');
        if (projectName && Array.isArray(JsonData)) {
            const found = JsonData.find(item => item.name === projectName);
            if (found) {
                selectedProject = found;
            }
        }
    });
</script>

<div class="navbar">
    <a href="/" class="home-button">Home</a>
</div>

<h1 class="page-title">Projects Page</h1>

<div id="mainDiv">
    <div id="projects">
        {#if Array.isArray(JsonData)}
            {#each JsonData as item}
                <div class="project-card" on:click={() => openPopup(item)}>
                    <h2 class="project-title">{item.name}</h2>
                    <div class="project-tags">
                        {#each item.tags as tag}
                            <span class="tag">{tag}</span>
                        {/each}
                    </div>
                </div>
            {/each}
        {/if}
    </div>

    {#if selectedProject}
        <div class="popup">
            <div class="popup-content">
                <button class="close-btn" on:click={closePopup}>&times;</button>
                <!-- Title is now clickable to copy the URL -->
                <h2 class="titlePopup" on:click={copyProjectLink} style="cursor: pointer;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    {selectedProject.name}
                </h2>
                {#if showCopyPopup}
                    <div class="copy-popup">link copied!</div>
                {/if}
                {#if selectedProject.links}
                    <ul>
                        {#each selectedProject.links as link}
                            <li>
                                <a href={link.url} target="_blank">{link.label ? link.label : link.url}</a>
                            </li>
                        {/each}
                    </ul>
                {/if}
                <hr>
                <h3>About</h3>
                {#if Array.isArray(selectedProject.description)}
                    {#each selectedProject.description as desc}
                        <p>{desc}</p>
                    {/each}
                {:else}
                    <p>{selectedProject.description}</p>
                {/if}
                {#if selectedProject.images}
                    <div class="project-images">
                        {#each selectedProject.images as img}
                            <img src={img} alt={selectedProject.name + " image"} />
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    {/if}
</div>

<style>
    /* Existing styles unchanged */
    .project-images {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 10px;
        margin-top: 15px;
    }

    .titlePopup {
        font-size: 1.5rem;
        color: var(--secondary-color);
        margin: 0 0 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 10px;
        transition: color 0.2s;
        width: fit-content;
    }

    .titlePopup:hover {
        color: var(--primary-color);
    }

    .copy-popup {
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-color: var(--primary-color);
        color: var(--background-color);
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        opacity: 0;
        transform: translateY(-10px);
        animation: fadeInOut 2s forwards;
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    @keyframes fadeInOut {
        0% { opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { opacity: 0; }
    }

    #projects {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .project-images img {
        width: 100%;
        object-fit: cover;
    }
    .navbar {
        padding: 10px;
        text-align: center;
        background: var(--background-color);
        margin-top: 1rem;
    }
    .home-button {
        text-decoration: none;
        color: var(--primary-color);
        font-size: 1rem;
        border: 1px solid var(--primary-color);
        padding: 5px 10px;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    .home-button:hover {
        background-color: var(--primary-color);
        color: var(--background-color);
    }
    #mainDiv {
        position: relative;
        background: var(--background-color);
        width: 100%;
        margin: 0 auto;
    }
    .project-card {
        position: relative;
        border: 2px solid var(--primary-color);
        padding: 15px;
        cursor: pointer;
        transition: border-color 0.2s;
        width: 80%;
        background: var(--background-color);
        color: var(--text-color);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        overflow: hidden;
    }
    .project-card:hover {
        border-color: var(--secondary-color);
    }
    .project-title {
        font-size: 1.5rem;
        margin: 0 0 10px;
        color: var(--primary-color);
    }
    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-end;
    }
    .tag {
        background: var(--primary-color);
        color: #fff;
        padding: 0px 10px;
        border-radius: 12px;
        font-size: 0.9rem;
        white-space: nowrap;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        height: fit-content;
    }
    .popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .popup-content {
        background: var(--background-color);
        color: var(--secondary-color);
        padding: 20px;
        border: 2px solid var(--primary-color);
        position: relative;
        box-sizing: border-box;
        margin: 20px;
        margin-bottom: 20px;
    }
    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        color: var(--secondary-color);
        border: none;
        font-size: 24px;
        cursor: pointer;
    }
    .close-btn:hover {
        color: red;
    }
    @media (min-width: 768px) {
        .popup-content {
            position: fixed;
            top: 0;
            right: 0;
            width: 400px;
            bottom: 0;
            margin: 20px;
            border-radius: 8px;
            animation: slideInRight 0.3s ease-out forwards;
        }
    }
    @media (max-width: 767px) {
        .popup-content {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 0;
            animation: slideInBottom 0.3s ease-out forwards;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideInBottom {
        from {
            opacity: 0;
            transform: translateY(100%);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
