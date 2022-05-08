async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="notebook-title"]').value;
    const notebook_url = document.querySelector('input[name="notebook-url"]').value;
  
    const response = await fetch(`/api/notebooks`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        notebook_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-notebook-form').addEventListener('submit', newFormHandler);
  