





<h1>About me</h1>


<div class="userImg">
    <img src="https://avatars.githubusercontent.com/0xa00" alt="avatar" width="200" height="200" />
<div class="userName">
    <div id="sentenceuser"><h2>Hi ! I'm <span id="user">0xa0</span> !</h2><h4>She/her</h4></div>
    <h3>{~~(new Date().getFullYear()-new Date(2002, 11, 7)/31557600000)-1970} yrs old French developer</h3>
    <h3>working as an Intern at Sanofi</h3>
</div>
</div>

<p>I mainly do Minecraft related things and I try to learn new things.</p>
<p>I live in France but I'm okay with moving to another country if I have to, I'm currently finishing my last year of computer science at the University of Montpellier-Sète.</p>





<h1>
    My interests
</h1>

<p>
    I could talk a lot about what I like, but I'm going to try to keep it short and simple :
</p>

<ul>
    <li>Programming</li>
    <li>Video games</li>
    <li>Music</li>
    <li>Art</li>

</ul>

<p>
    I'm also interested about learning new things, so if you want to talk about anything , feel free to contact me !
</p>

<h1>
    My skills
</h1>

<p>
    Recently I've been working a lot with web languages like HTML, CSS, JS and framework like Svelte or Vuejs. But I also have some experience with Java, Python, C and Rust.
    I want to learn more about Rust and Go in the future and I also want to learn more about web security as I'm really interested in this field.
</p>








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



<svelte:head>
    <title>$./0xa0.sh --about</title>
</svelte:head>