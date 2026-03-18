
import { loadUsers, handleCreate, handleDelete,handleEdit, handleUpdate } from "./js/users.js";

function init() {
  setupEventListeners();
  loadUsers();
}


//events
function setupEventListeners(){

  const createForm = document.getElementById("userForm");
  createForm.addEventListener("submit", handleCreate);

  const editForm = document.getElementById("edit-form");
  editForm.addEventListener("submit", handleUpdate);

   const usersContainer = document.getElementById("usersList");
   usersContainer.addEventListener("click", (event) => {

   const deleteButton = event.target.closest(".delete-btn");

   if(deleteButton){
    handleDelete(event);
    }
    else if(event.target.classList.contains("edit-btn")){
    handleEdit(event);
    }
   });
};


document.addEventListener("DOMContentLoaded", init);