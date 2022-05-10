const id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const editNoteHandler = async function (event) {
  event.preventDefault();

  const question = document.querySelector('input[name="note-subject"]').value;
  const answer = document.querySelector('textarea[name="note-body"]').value;

  const response = await fetch(`/api/notes/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      question,
      answer,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace(document.referrer);
  } else {
    alert(response.statusText);
  }
};

const deleteNoteHandler = async function (event) {
  event.preventDefault();

  const response = await fetch(`/api/notes/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    window.location.replace(document.referrer);
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#edit-note-form")
  .addEventListener("submit", editNoteHandler);
document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteNoteHandler);
