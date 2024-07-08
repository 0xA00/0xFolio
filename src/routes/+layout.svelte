<script>
    import "../app.css";
</script>

<header>
    
</header>
<div class="mainContent">
    <slot/>
</div>

<footer>

</footer>


<style>
    .mainContent{
        animation: FadeIn 1s;
        width: 90%;
        margin: auto;
    }

    @keyframes FadeIn{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
</style>


