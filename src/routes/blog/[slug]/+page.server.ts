


export const load = async ({params}) => {
    //get the params from the URL
    console.log(params);
    //fetch the blog post data from the API
    const blog = await fetch(`http://blog.0xa0.dev/api/getblogpost/${params.slug}`);
    const blogData = await blog.json();

    //return the blog post data as props
    return { props: { blogData } };

}