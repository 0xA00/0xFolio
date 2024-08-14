import { gql, GraphQLClient } from 'graphql-request'


export const load = async () => {
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

const datagraph = await client.request(github, varia);

    
        return { prop: { datagraph } };
    }