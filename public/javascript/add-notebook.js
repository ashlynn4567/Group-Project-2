async function newFormHandler(event) {
  event.preventDefault();

  const notebook_name = document.querySelector(
    'input[name="notebook-name"]'
  ).value;

  const response = await fetch(`/api/notebooks`, {
    method: "POST",
    body: JSON.stringify({
      notebook_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/mynotebooks");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#new-notebook-form")
  .addEventListener("submit", newFormHandler);
