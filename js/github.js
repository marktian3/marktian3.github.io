// Call github api to get a list of all blog posts, renders them onto html
const apiEndpoint = 'https://api.github.com/repos/marktian3/marktian3.github.io/contents/blog';

fetch(apiEndpoint) 
  .then(response => response.json())
  .then(files => {
    for (let file of files) {
      if (file.name.endsWith('.md')) {
        const blogPostLink = document.createElement('a');
        const blogPostName = file.name.slice(0, -3);
        blogPostLink.href = `blog.html?post=${blogPostName}`;
        blogPostLink.textContent = blogPostName;

        document.getElementById('blog-posts').appendChild(blogPostLink);
      }
    }
});
