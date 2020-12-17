function CloseNote(element) {
    element.parentElement.remove();
}

function addNote() {
    var container = document.createElement("div");
    container.innerHTML = "<div class='note'> <input type='text' class='n-titulo' placeholder='Title...'><a onclick='CloseNote(this)' class='close'>x</a><textarea class='text-area' placeholder='New note...'></textarea></div>";
    document.getElementById("container").appendChild(container);
    // document.getElementById("container").innerHTML += "<div class='note'> <input type='text' class='n-titulo' placeholder='Titulo...'><a onclick='CloseNote(this)' class='close'>x</a><textarea class='text-area'></textarea></div>";
}