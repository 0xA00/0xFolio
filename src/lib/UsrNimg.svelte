<script lang="ts">
	import { onMount } from "svelte";





    const defaultUsrname = "0xA0";
    const defaultImg = "https://avatars.githubusercontent.com/"+defaultUsrname+"0";

    let usrname = defaultUsrname;
    
    let imgcrrent = defaultImg;

    //get IknowWhatYouAre
    let iknow : HTMLTitleElement;
    onMount(()=>{
        const IKnowWhatYouAre = document.getElementById("IKnowWhatYouAre") as HTMLTitleElement;
        IKnowWhatYouAre.style.visibility = "visible";
        iknow = IKnowWhatYouAre;
    })



    let usrnameCountClcik = 0;
    let usrnameEdible = false;

    function onUsrnameClcik(){
        usrnameCountClcik++;
        if (usrnameCountClcik >= 1){
            usrnameEdible = true;
        }
    }
    

    function onUsrnameEditble(e:Event){
        const content = ((e as InputEvent).target as HTMLTitleElement).textContent as string
        usrname = content;
        if(usrname == ""){
            imgcrrent = "shrug.png";
            iknow.style.display = "none"; 

        }
        else if(usrname == "0xA0" || usrname=="0xa0" || usrname=="0XA0" || usrname=="0xa0"){
            imgcrrent = defaultImg;
            iknow.style.display = "inline";
            
        }
        else if(usrname != defaultUsrname){
            imgcrrent = "https://avatars.githubusercontent.com/"+usrname;
            iknow.style.display = "none";
  
        }
        

    }


</script>


<div class="mainFrame">
    <div class="allofThat">
        <img src={imgcrrent} alt="usrImg" class="usrImg"/>
        <div class="senall">
        <div class="sentence">
            
            <h1 class="space-grotesk">Hi! I'm  </h1>
            
            <h1
            id="usrname-title"
            on:click={onUsrnameClcik}
            spellcheck="false"
            contenteditable={usrnameEdible}
            on:input={onUsrnameEditble} 
            class="space-grotesk"
        >
        {usrname}</h1>
        <h1 id="IKnowWhatYouAre">🏳️‍⚧️(she/her)</h1>
    </div>
       
        
    </div>
    </div>

    <div class="lildesc">
        <p>Hi everyone , I'm 0xa0. A {~~(new Date().getFullYear()-new Date(2002, 11, 7)/31557600000)-1970} year old developer from Montpellier, France ! <br>
        I mainly do projects related to Minecraft but I can somehow work on other things. <br>
        I'm currently interested in learning Rust, web design and doing silly things :3</p>
    </div>


    
</div>



<style>



    .mainFrame{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin:auto;
        padding-top: 50px;
        gap: 50px;

    }

    #IKnowWhatYouAre{
        font-size: 1rem;
        visibility: visible;
        opacity: 0;
        transition: opacity 0.5s;


    }

    .sentence:hover #IKnowWhatYouAre{
        opacity: 1;
    }

   

    .allofThat{
        display: flex;
        justify-content: start;
        align-items: center;

        width:fit-content;


      
    }

    .lildesc{

        text-align:start;
        font-weight: 400;

  
        font-size: 1.5rem;
        
    }


    h1 {

		margin: 0;
		
		font-weight: normal;
        min-width: 100px;
	}
	h1:first-letter {
		text-shadow: 0 0 0.15em var(--text-color);
	}

    .sentence{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }



    img{
        width: 250px;
        height: 250px;
        border-radius: 20%;
        margin-right: 20px;
    }

 

</style>