<script>
    import "../app.css";



    

</script>


<div id="layout">

<header>
    <h2>0xA0.dev</h2>
    <img src="/assets/ascii-art.png" alt="0xA0.dev">
</header>




<main>
<hr>

<slot/>


</main>

</div>


<style>
#layout {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 70%;
}

header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 70%;
    font-size: 0.8rem;
    gap: 1rem;
}

header img {
    width: 100%;
    height: 50px;
    object-fit: cover;
    object-position: center;
}

main {
    display: flex;
    flex-direction: column;
    row-gap: 0;
    width: 100%;
    max-width: 70%;
    min-height: 60vh;
    align-items: flex-start;
}

main hr {
    width: 100%;
    margin-bottom: 0;
}

@media (max-width: 768px) {
    #layout,
    header,
    main {
        width: 100%;
        max-width: 100%;
    }
}


</style>