<style>
    .heatmap {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: fit-content;
        max-width: 100%;
        transition: display 0.5s;
        padding-bottom: 2rem;
    }

    @media (max-width: 813px) {
        .heatmap {
            display: none;
        }
    }

    .dayoftheweek {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 0.75rem;
        padding-top:1.6rem;
        padding-bottom:0.75rem;
    }

    .dayoftheweek div {
        font-weight: 500;
  
    }

    .monthandmap {
        display: flex;
        flex-direction: column;
      
    }

    .monthname {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-between;
        font-size: 0.75rem;
        padding-right: 2.7rem;
    }
</style>

<div class="heatmap">
    <div class="dayoftheweek">

        <div>Mon</div>
        <div></div>
        <div>Wed</div>
        <div></div>
        <div>Fri</div>

    </div>
    
    <div class="monthandmap">
        <div class="monthname">
        </div>
        <div class="map">
            {#each Array(371) as _}
            <div class="day"></div>
            {/each}
        </div>
    </div>


</div>






<script lang="ts">
	import { onMount } from "svelte";
    //let's create a github contribution heatmap
    //use github graphl API
    export let prop;
    import "./heatmap.css";
    let data = prop.prop.datagraph;




const monthss = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']




        //get the month of the last day and it will be our months page


onMount(() => {
        const month = data.user.contributionsCollection.contributionCalendar.weeks[51].contributionDays[6].date.split('-')[1]
      
//now we gather all the 11 previous month and put them in an array const months = [...monthss.slice(month + 1), ...monthss.slice(0, month + 1)] and make it shifted so that the current month is the last one
        const months = [...monthss.slice(parseInt(month) - (new Date().getDate() > 14 ? 0 : 1)), ...monthss.slice(0, parseInt(month)  - (new Date().getDate() > 14 ? 0 : 1))]
        console.log(months)
        const monthname = document.querySelector('.monthname')
        months.forEach(month => {
            const monthdiv = document.createElement('div')
            monthdiv.textContent = month
            monthname.appendChild(monthdiv)
        })

       //redo the same thing but instead of creating the div , query the div and change the background color
         const Alldays : any  = document.querySelectorAll('.day')
            let i = 0;
            data.user.contributionsCollection.contributionCalendar.weeks.forEach(week => {
                week.contributionDays.forEach(day => {
                    //add css here cuz it don't want to work in the style tag
                    //if data-count is between 1 and 9, the color will be --lowcommit
                    if(day.contributionCount >= 1 && day.contributionCount <= 9){
                        Alldays[i].style.backgroundColor = 'var(--lowcommit)'
                    }
                    //if data-count is between 10 and 19, the color will be --mediumcommit
                    if(day.contributionCount >= 10 && day.contributionCount <= 19){
                        Alldays[i].style.backgroundColor = 'var(--medcommit)'
                    }
                    //if data-count is between 20 and 29, the color will be --highcommit
                    if(day.contributionCount >= 20 && day.contributionCount <= 29){
                        Alldays[i].style.backgroundColor = 'var(--highcommit)'
                    }
                    //if data-count is between 30 and 39, the color will be --veryhighcommit
                    if(day.contributionCount >= 30){
                        Alldays[i].style.backgroundColor = 'var(--maxcommit)'
                    }
                    //add a div below the day div with the data-count , this will be the number of commits , you need to hover the day to see it
                    // Add a hovercard below the day div with the data-count
                    if(day.contributionCount > 0){
                    const hovercards = document.createElement('div');
                    hovercards.classList.add('hovercard');
                    //change the date to only something like 29 August
                    let correctDate = day.date.split('-')
   


                    if(day.contributionCount > 1){
                        //change the date to only something like 29 August
               
                        hovercards.textContent = day.contributionCount + ' commits on ' + correctDate[2] + ' ' + monthss[parseInt(correctDate[1])-1]
                    }
                    else
                    {
                        hovercards.textContent = day.contributionCount + ' commit on ' + correctDate[2] + ' ' + monthss[parseInt(correctDate[1])-1]
                    }
                    
                    //change opacity to 0
                    Alldays[i].appendChild(hovercards);
                    }

                    i++;
                })
            })

        })


</script>