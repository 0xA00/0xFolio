import {github_token} from '$env/static/private'
import { Octokit } from 'octokit'


export async function load(){
    const octokit = new Octokit({auth: github_token})
    const {data} = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: '0xa00',
        repo: 'BlogPosts',
        path: 'posts',
        headers:{
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    const filteredData = Array.isArray(data)
        ? data.filter(item => item.type === 'file' && item.name.endsWith('.md'))
        : [];


    return {
        data: filteredData
    };

}