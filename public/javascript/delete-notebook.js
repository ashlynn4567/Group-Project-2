async function deleteNotebookHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/notebooks/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/mynotebooks/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteNotebookHandler);
