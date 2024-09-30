export const prerender = false;
export const trailingSlash = 'always';

import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {
    const blog = await fetch('http://blog.0xa0.dev/api/getblogpost');
    const blogData = await blog.json();


    return { props: { blogData } };
    };
