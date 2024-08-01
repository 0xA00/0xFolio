<style>
    .heatmap {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: fit-content;
        max-width: 100%;
        margin: auto;
    }

    .dayoftheweek {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;
    }

    .dayoftheweek div {
        font-weight: 500;
        font-size: 1.1em;
    }

    .monthandmap {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .monthname {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: space-between;
    }
</style>

<div class="heatmap">
    
    <div class="monthandmap">
        <div class="monthname">
    
        </div>
        <div class="map">
            
        </div>
    </div>


</div>


*Not finished yet , i need to add month and days of the week, but still want to show it to you, so you can see the progress*



<script lang="ts">
    //let's create a github contribution heatmap
    //use github graphl API
import { gql, GraphQLClient } from 'graphql-request'
	import { onMount } from 'svelte';
    import "./heatmap.css";


const github = gql`
query($userName:String!) { 
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`


const varia = {
    userName: "0xA00"
}

const endpoint = "https://api.github.com/graphql"

const client = new GraphQLClient(endpoint, {
    headers: {
        //I don't give a damn about this token, it's only a read token, what will you do with that ? know what public commit I have made ?
        authorization: `Bearer `+ import.meta.env.VITE_githubtoken
    }
})




onMount(() => {
    client.request(github, varia).then(data => {
        console.log(data)
        
        const weeks = data.user.contributionsCollection.contributionCalendar.weeks
        const heatmap = document.querySelector('.map')
        weeks.forEach(week => {
            week.contributionDays.forEach(day => {
                const dayElement = document.createElement('div')
                dayElement.classList.add('day')
                //add css here cuz it don't want to work in the style tag
                //if data-count is between 1 and 9, the color will be --lowcommit
                if(day.contributionCount >= 1 && day.contributionCount <= 9){
                    dayElement.style.backgroundColor = 'var(--lowcommit)'
                }
                //if data-count is between 10 and 19, the color will be --mediumcommit
                if(day.contributionCount >= 10 && day.contributionCount <= 19){
                    dayElement.style.backgroundColor = 'var(--medcommit)'
                }
                //if data-count is between 20 and 29, the color will be --highcommit
                if(day.contributionCount >= 20 && day.contributionCount <= 29){
                    dayElement.style.backgroundColor = 'var(--highcommit)'
                }
                //if data-count is between 30 and 39, the color will be --veryhighcommit
                if(day.contributionCount >= 30){
                    dayElement.style.backgroundColor = 'var(--maxcommit)'
                }


                dayElement.style.width = '10px'
                dayElement.style.height = '10px'         
                dayElement.setAttribute('data-count', day.contributionCount)
                heatmap.appendChild(dayElement)
            })
        })

        
        heatmap.style.gridTemplateColumns = `repeat(${weeks.length}, 1fr)`
    })
})


</script>