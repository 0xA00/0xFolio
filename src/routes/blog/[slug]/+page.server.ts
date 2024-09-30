
export const prerender = false;


import type { PageServerLoad } from './$types';






export const load : PageServerLoad = async ({params}) => {

    //fetch the blog post data from the API
    const blog = await fetch(`http://blog.0xa0.dev/api/getblogpost/${params.slug}`);
    const blogData = await blog.json();
 

    

    return { blogData };

}