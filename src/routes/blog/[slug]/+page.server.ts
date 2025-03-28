import { github_token } from '$env/static/private';
import { Octokit } from 'octokit';

export async function load({ params }: { params: { slug: string } }) {
    const octokit = new Octokit({ auth: github_token });
    const { slug } = params;

    const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: '0xa00',
        repo: 'BlogPosts',
        path: "posts/"+slug // Use the slug as the path
    });


    // Remove the '.md' extension from the file name if it exists
    if (typeof data.name === 'string' && data.name.endsWith('.md')) {
        data.name = data.name.slice(0, -3);
    }
    if (typeof data.content === 'string') {
        const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');
        data.content = decodedContent;
    }

    
    
    return {
        data
    };
}