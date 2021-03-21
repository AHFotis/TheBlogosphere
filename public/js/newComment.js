const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('textarea[name="comment"]').value.trim();

    const blog_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    console.log(blog_id)

    console.log(comment)
  
    if (comment) {
        //WHY WON'T YOU WORK?!?!?!
      const response = await fetch('/api/blogs/id', {
        method: 'POST',
        body: JSON.stringify({ comment, blog_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload;
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('.comment-form')
  .addEventListener('submit', commentFormHandler);