<script>
    import { marked } from 'marked';
    export let data;
    import { onMount } from 'svelte';
    
    let showCopyPopup = false;
    
    async function copyPageLink() {
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url);
            showCopyPopup = true;
            setTimeout(() => {
                showCopyPopup = false;
            }, 2000);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }
    
    onMount(() => {
        // Open external links in a new tab if they don't include /blog
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            if (!link.href.includes('/blog')) {
                link.setAttribute('target', '_blank');
            }
        });
    
        // Process headers h2 to h6: add clickable anchors with a copy icon
        const headerTags = Array.from(document.getElementById('maindiv').querySelectorAll('h2, h3, h4, h5, h6'));
        headerTags.forEach(header => {
            // Create an id from header text if it doesn't already exist
            if (!header.id) {
                header.id = header.textContent.trim().toLowerCase().replace(/\s+/g, '-');
            }
    
            // Create SVG icon
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            svg.setAttribute("width", "14");
            svg.setAttribute("height", "14");
            svg.setAttribute("viewBox", "0 0 24 24");
            svg.setAttribute("fill", "none");
            svg.setAttribute("stroke", "currentColor");
            svg.setAttribute("stroke-width", "2");
            svg.setAttribute("stroke-linecap", "round");
            svg.setAttribute("stroke-linejoin", "round");
            svg.setAttribute("class", "link-icon");
    
            const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path1.setAttribute("d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71");
            svg.appendChild(path1);
            const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path2.setAttribute("d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71");
            svg.appendChild(path2);
    
            // Initially hide the svg icon
            svg.style.display = "none";
            svg.style.marginLeft = "0.5rem";
            svg.style.cursor = "pointer";
    
            // Copy header link when svg is clicked
            svg.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                const headerLink = window.location.href.split('#')[0] + '#' + header.id;
                navigator.clipboard.writeText(headerLink)
                    .then(() => {
                        showCopyPopup = true;
                        setTimeout(() => {
                            showCopyPopup = false;
                        }, 2000);
                    })
                    .catch(err => console.error("Failed to copy header link: ", err));
            });
    
            // Show the svg icon on header hover
            header.addEventListener("mouseenter", () => {
                svg.style.display = "inline-block";
            });
            header.addEventListener("mouseleave", () => {
                svg.style.display = "none";
            });
    
            // Make the header clickable: update the URL hash and scroll smoothly to it without reloading the page
            header.style.cursor = "pointer";
            header.addEventListener("click", () => {
                history.pushState(null, null, '#' + header.id);
                header.scrollIntoView({ behavior: 'smooth' });
            });
    
            // Append the svg icon to the header
            header.appendChild(svg);
        });
    });
</script>

<div id="maindiv">
    <h1 class="titlePopup" on:click={copyPageLink}>
        {data.data.name}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
    </h1>

    {#if showCopyPopup}
        <div class="copy-popup">link copied!</div>
    {/if}

    <div>
        {@html marked(data.data.content)}
    </div>
</div>

<style>
    #maindiv {
        position: relative;
    }

    .titlePopup {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        gap: 0.5rem;

    }

    .titlePopup svg {
        margin-left: auto;
        display: none;

    }

    .titlePopup:hover svg {
        display: block;
    }

    .copy-popup {
        position: fixed;
        top: 0.5rem;
        right: 0.5rem;
        background-color: var(--primary-color, #0078D4);
        color: #fff;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
        white-space: nowrap;
    }
</style>
