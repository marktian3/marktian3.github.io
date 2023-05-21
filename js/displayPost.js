// displayPost.js
window.onload = function() {
  // Get the blog post content from localStorage and display it on the page.
  document.getElementById('blog-post').innerHTML = localStorage.getItem('postContent');
  localStorage.removeItem('postContent');  // optional: clean up after use
};