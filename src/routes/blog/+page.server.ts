export const prerender = true;
export const trailingSlash = 'always';


export const load = async () => {
    const blog = await fetch('http://blog.0xa0.dev/api/getblogpost');
    const blogData = await blog.json();


    return { props: { blogData } };
    };
