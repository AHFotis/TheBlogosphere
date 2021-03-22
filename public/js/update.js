const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#updateBlogTitle').value.trim();
  
      const content = document.querySelector('#updateBlogBody').value.trim();
  
      console.log(title, content)
    if (title && content) {
      const response = await fetch('/dash/:id', {
        method: 'PUT',
        body: JSON.stringify({
         title, content
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace("/dash");
      } else {
        alert(response.statusText);
      }
    }
  };

document
  .querySelector('.updateBtn').addEventListener('submit', updateFormHandler);