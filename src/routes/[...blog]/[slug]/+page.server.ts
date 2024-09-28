import { compile } from 'mdsvex';
export const prerender = false;


export const load = async ({params}) => {
    //get the params from the URL

    //fetch the blog post data from the API
    const blog = await fetch(`http://blog.0xa0.dev/api/getblogpost/${params.slug}`);
    const blogData = await blog.json();

    let compileddata = await compile(blogData.content);
    //ugly ass solution
    compileddata.code = compileddata.code.replace(/{@html `/g, "");
    compileddata.code = compileddata.code.replace(/`}/g, "");

    blogData.content = compileddata.code;

    //return the blog post data as props
    return { props: { blogData } };

}