
import { loadUsers, handleEdit, handleUpdate } from "./js/users.js";
import { handleCreate } from "./js/create.js";
import { handleDelete } from "./js/delete.js";  
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
   usersContainer.addEventListener("click", async (event) => {

   const deleteButton = event.target.closest(".delete-btn");

   if(deleteButton){
    await handleDelete(event);
    await loadUsers();
    }
    else if(event.target.classList.contains("edit-btn")){
    handleEdit(event);
    }
   });
};


document.addEventListener("DOMContentLoaded", init);