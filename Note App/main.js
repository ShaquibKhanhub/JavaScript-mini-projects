let addBtn = document.getElementById("addBtn");
let notesContainer = document.getElementById("notes");
let notes = JSON.parse(localStorage.getItem("note")) || [];
displayNotes();


//here we're just creating note and adding it to the array of notes, then saving that back into local storage
addBtn.addEventListener("click", (e) => {
  let addText = document.querySelector("textarea").value;
  e.preventDefault();

  if (addText.length === 0) {
    alert("Please enter a note!");
  } else {
    let noteId = Date.now().toString();
    notesContainer.innerHTML += `
      <div class="noteCard my-2 mx-2 card" style="width: 18rem;" id="${noteId}">
      <div class="card-body"  >
          <h5 class="card-title">Note </h5>
          <p class="card-text"> ${addText}</p>
          <button  class="btn btn-danger" )">Delete Note</button>
      </div>
  </div>`;
    notes.push({ id: noteId, title: addText });
    localStorage.setItem("note", JSON.stringify(notes));
    document.getElementById("addText").value = ""; // Clear the textarea
    displayNotes();
  }
});

//Function to displayNotes elements from localStorage
function displayNotes() {
  if (notes.length === 0) {
    notesContainer.innerHTML = `Nothing to show! Create your first Note!`;
  } else {
    notesContainer.innerHTML = null;
    notes.forEach((ele, ind) => {
      notesContainer.innerHTML += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;" id="${ele.id}">
        <div class="card-body"  >
            <h5 class="card-title">Note </h5>
            <p class="card-text"> ${ele.title}</p>
            <button class="btn btn-danger" onclick="deleteNote('${ele.id}')">Delete Note</button>
        </div>
      </div>`;
    });
  }
}

function deleteNote(noteId) {
  notes = notes.filter((note) => note.id !== noteId);
  localStorage.setItem("note", JSON.stringify(notes));
  displayNotes();
}

// function deleteNote(data, index) {
//   notes.splice(index, 1);
//   localStorage.setItem("note", JSON.stringify(notes));
//   displayNotes(data);
// }
