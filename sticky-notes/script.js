function loadNotes(){

let notes = JSON.parse(localStorage.getItem("notes")) || [];

let container = document.getElementById("notes");
container.innerHTML = "";

notes.forEach((note,index)=>{

let div = document.createElement("div");
div.className="note";

div.innerHTML = `
<textarea onchange="updateNote(${index},this.value)">${note}</textarea>
<br>
<button onclick="deleteNote(${index})">Delete</button>
`;

container.appendChild(div);

});

}

function addNote(){

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.push("");

localStorage.setItem("notes",JSON.stringify(notes));

loadNotes();

}

function updateNote(index,value){

let notes = JSON.parse(localStorage.getItem("notes"));

notes[index] = value;

localStorage.setItem("notes",JSON.stringify(notes));

}

function deleteNote(index){

let notes = JSON.parse(localStorage.getItem("notes"));

notes.splice(index,1);

localStorage.setItem("notes",JSON.stringify(notes));

loadNotes();

}

loadNotes();