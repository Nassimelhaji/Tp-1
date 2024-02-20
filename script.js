/*
function confirm(){
    let elem1 = document.getElementById("Nom").value;
    let elem2 = document.getElementById("Pwd").value;
    
    localStorage.setItem("user", elem1);
    localStorage.setItem("pwd", elem2);
}.
*/
const taskInput = document. getElementById ("taskInput") ;
const addTaskBtn = document.getElementById ("addTaskBtn");
const taskList = document.getElementById ("taskList");

var task = "task";
var i = 0;

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
   // La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et
   // nouvelles lignes) au début et à la fin d'une chaîne.
    if (taskText !== ""){
    const listItem = document.createElement('li')
    listItem.textContent = taskText;
    taskList.appendChild(listItem);
    taskInput.value = "";
    // Ajoutez un bouton de suppression à chaque élément de liste
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
   
   // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau nœud ou repositionner un 
   // nœud existant en tant que dernier enfant d'un nœud parent particulier.
    listItem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", () => {
    listItem.remove();
    });

    listItem.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    listItem.addEventListener("dblclick", () => {
        const newText = prompt("Modifier la tâche :", listItem.textContent);
        if (newText !== null && newText !== "") {
            listItem.textContent = newText;
        }
        btDelete();
    });

    } else {
    alert("Veuillez entrer une tâche valide.");
    }

    function btDelete(){

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";
        listItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
        listItem.remove();
        });
     
     }


    localStorage.setItem(task.concat(i), taskText);
    i++;
}

    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
    
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

