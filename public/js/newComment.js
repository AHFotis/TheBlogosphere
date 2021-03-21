const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const text = document.querySelector('#comment').value.trim();

    // const blog_id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];
  
    if (text) {
        //WHY WON'T YOU WORK?!?!?!
      const response = await fetch('/api/blogs/', {
        method: 'POST',
        body: JSON.stringify({ 
            text }),
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
  .querySelector('.comment-form').addEventListener('submit', commentFormHandler);