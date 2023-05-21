window.renderPost = function() {
  // Parse the URL query parameters.
  const params = new URLSearchParams(window.location.search);
  const postName = params.get('post');

  if (postName) {
      // Fetch the markdown file from the /blog directory.
      fetch(`https://raw.githubusercontent.com/marktian3/marktian3.github.io/master/blog/${postName}.md`)
          .then(response => response.text())
          .then(markdown => {

            // Remove YAML front matter.
            const content = markdown.replace(/^---[\s\S]*?---\s/, '');

              // Convert the markdown to HTML and display it on the page.
              const html = marked.parse(content);
              localStorage.setItem('postContent', html);
              location.href = 'post.html';
          });
  }
}