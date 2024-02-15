function addTodo() {
    var name = document.getElementById('todoName').value.trim();
    var content = document.getElementById('todoContent').value.trim();
    
    if(name === "" || content === "") {
    alert("Veuillez remplir les champs Nom et Contenu.");
    return;
    }
    
    var todoContainer = document.getElementById('todoContainer');
    var todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    
    var todoNameElement = document.createElement('h3');
    todoNameElement.textContent = name;
    
    var todoContentElement = document.createElement('p');
    todoContentElement.textContent = content;
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.onclick = function() {
        todoContainer.removeChild(todoElement);
    };
    
    todoElement.appendChild(todoNameElement);
    todoElement.appendChild(todoContentElement);
    todoElement.appendChild(deleteButton);
    
    todoContainer.appendChild(todoElement);
    
    document.getElementById('todoName').value = '';
    document.getElementById('todoContent').value = '';
}