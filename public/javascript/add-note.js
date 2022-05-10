const addNoteHandler = async function (event) {
  event.preventDefault();

  const question = document.querySelector('input[name="note-subject"]').value;
  const answer = document.querySelector('textarea[name="note-body"]').value;
  const notebook_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/notes`, {
    method: "POST",
    body: JSON.stringify({
      question,
      answer,
      notebook_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#add-note-form")
  .addEventListener("submit", addNoteHandler);
