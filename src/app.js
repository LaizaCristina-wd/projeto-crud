
import { loadUsers, handleCreate, handleDelete, handleUpdate} from "./js/users.js";


function init(){
  setupEventListeners();
  loadUsers();
}


//event do botão criar usuario
function setupEventListeners(){

  const createForm = document.getElementById("userForm");
  createForm.addEventListener("submit", handleCreate);

  const editForm = document.getElementById("edit-form");
  editForm.addEventListener("submit", handleUpdate);

   const usersContainer = document.getElementById("usersList");
   usersContainer.addEventListener("click", (event) => {

   if(event.target.classList.contains("delete-btn")){
      handleDelete(event);
    }
    else if(event.target.classList.contains("edit-btn")){
    handleEdit(event);
    }
   });
};


document.addEventListener("DOMContentLoaded", init);