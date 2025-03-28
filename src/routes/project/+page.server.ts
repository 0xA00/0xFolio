import {github_token} from '$env/static/private'
import { Octokit } from 'octokit'


export async function load(){
    const octokit = new Octokit({auth: github_token})
    const {data} = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: '0xa00',
        repo: 'BlogPosts',
        path: 'projects/projects.json',
        headers:{
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })

    if (data && 'content' in data && typeof data.content === 'string') {
        const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');
        data.content = decodedContent;

    }

    const jsonData = JSON.parse(data.content);

    return {
        jsonData
    };

}