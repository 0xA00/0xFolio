<script>
	import HeatMap from "$lib/heatMap.svelte";

</script>







<h1>About me</h1>


<div class="userImg">
    <img src="https://avatars.githubusercontent.com/0xa00" alt="avatar" width="200" height="200" />
<div class="userName">
    <div id="sentenceuser"><h2>Hi ! I'm <span id="user">0xa0</span> !</h2><h4>She/her</h4></div>
    <h3>{~~(new Date().getFullYear()-new Date(2002, 11, 7)/31557600000)-1970} yrs old French developer</h3>
    <h3>working as an Intern at Sanofi</h3>
</div>
</div>

<p>hi ! I'm 0xa0, a  {~~(new Date().getFullYear()-new Date(2002, 11, 7)/31557600000)-1970} year old developer and I mainly do Minecraft related things and I try to learn new things.</p>
<p>I live in France but I'm okay with moving to another country if I have to, I'm currently finishing my last year of computer science at the University of Montpellier-Sète.</p>


<HeatMap/>




<style>


    


    #sentenceuser{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.55rem;
        }

    #user{
        color: var(--primary-color);

        }

    p{

        text-wrap:pretty;  
        font-weight: 500;
        font-size: 1.1em;
    }
    .userImg{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        transition: flex-direction 0.5s;
        }

    .userName{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        }

        .userName *{
            margin: 0;
            padding: 0;
        }
    h1{
        color: var(--primary-color);
        font-size: 2rem;
        }

   .userImg > img{
        border-radius: 15%;
        margin-top: 1rem;
        margin-left: 1rem;
        }

    @media (max-width: 768px){

        .userImg{
            flex-direction: column;
            transition: flex-direction 0.5s;
            
            gap: 1rem;
            }

            .userImg > img{
                margin-left: 0;
                margin-top: 0;
                }


    }
</style>