<script>
    import "../app.css";
</script>

<header>
    
</header>
<div class="mainContent">
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
        height: 50px;

    }
</style>


