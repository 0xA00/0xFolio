<canvas class="blahaj-win">
    
</canvas>

<style>
    .blahaj-win{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
        transition: opacity 1s;
        opacity: 0;
    }
</style>


<script>
	import { onMount } from "svelte";


    function randomNotSo(){
        let possibleNums = [ -4, -3, 5,3];
        return possibleNums[Math.floor(Math.random() * possibleNums.length)];

    }

    function onKonamiCode(cb){
        var input = "";
        var key = "38384040373937396665";
        document.addEventListener("keydown", function(e){
            input += ("" + e.keyCode);
            if(input === key){
                return cb();
            }
            if(!key.indexOf(input)){
                return;
            }
            input = ("" + e.keyCode);
        });
    }

   
    

    onMount(() => {
        const canvas = document.querySelector('.blahaj-win');
        const ctx = canvas.getContext('2d');
        const width = canvas.width = window.innerWidth;
        const height = canvas.height = window.innerHeight;

        //have a var with a chance of 1 in 10
        let chance = Math.random() * 10;
        let eclipse = false;
        const blahaj = new Image();

        if(chance < 9){
            blahaj.src = 'blahaj.png';
        }
        else{
            blahaj.src = 'behelith.png';

            eclipse = true;
       
        }


       
        
        //spawn multiple images
        

        //random x between 0 and width-blaj.width
        let x = Math.random() *width- blahaj.width;
        let y = 0;
        //randdom xspeed between -5 and 5 while avoiding near 0
        let xSpeed = randomNotSo();
        //for the yspeed, it will be around 3 to 5
        let ySpeed =Math.random() * 3 + 2;
        //draw function will simulate the movement of the image with some gravity, like a falling object
        function draw(){
            
            ctx.drawImage(blahaj, x, y);
            y += ySpeed;
            x += xSpeed;

            //as soon as the image spawn , it will start falling with some gravity
            ySpeed += 0.1;

            //if the image hits the bottom of the screen, it will bounce back up
            if(y + blahaj.height > height){
                ySpeed *= -0.6;
                y = height - blahaj.height;
            }

            //if the image hits the left or right of the screen, it will be tp back to the top
            if(x + blahaj.width > width+blahaj.width || x < 0-blahaj.width){
                x = Math.random() * width;
                y = 0;
                xSpeed = randomNotSo();
                ySpeed =Math.random();
            }

        

            requestAnimationFrame(draw);

        }

        onKonamiCode(() => {
            //change z-index to 1
            canvas.style.zIndex = 1;
            if (eclipse){
                canvas.style.backgroundImage = 'url("eclipse.jpg")';
                //have background stretch to cover the whole screen
                canvas.style.backgroundSize = 'cover';
                canvas.style.opacity = 1;
            }
    
            
            
            draw();
        });
    });

</script>