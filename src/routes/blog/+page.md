<script>

    export let data;

    data.data = data.data.map(post => {
        return { ...post, name: post.name.replace(/\.md$/, '') };
    });



</script>

<h1>
    Blogs
</h1>

Hello! you stumbled upon my blog page. Here you can find some of the things I've written about. 

Explore the posts by clicking on any title from the list on the left.

Here, I share insights on topics I've explored, projects I've worked on, and ideas that have sparked my curiosity.







