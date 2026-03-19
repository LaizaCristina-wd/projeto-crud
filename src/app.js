  console.log("APP RODANDO");
  import { getUsers } from "./js/api.js";
  import { handleEdit, handleUpdate } from "./js/updateUsers.js";
  import { handleCreate, addUserCard } from "./js/create.js";
  import { handleDelete } from "./js/delete.js";  
  function init() {
    setupEventListeners();
    loadUsers();
  }
  export async function loadUsers(){
    try {
      const containerUser = document.getElementById("usersList");
  containerUser.innerHTML = "";
  const data = await getUsers();
  console.log(data);
  data.users.forEach((user, id)=>{
    addUserCard(user, id);
  });
  } catch(error){
    console.error("erro ao carregar usuários", error);
  }
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
      
      const confirmacao = confirm("Deletar usuario?");
      if(!confirmacao){
        event.preventDefault();
      }
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