import { getUsers, createUser, deleteUser, updateUser, updateParseUser } from "./api.js";
import { addUserCard } from "./usersUI.js";
import { hideEditForm, showEditForm } from "./formUI.js";

export async function loadUsers(){
 const containerUser = document.getElementById("usersList");
 containerUser.innerHTML = "";
 const data = await getUsers();
 data.users.forEach(user=>{
   addUserCard(user);
 });
} 

//lógica de criar usuário
 export async function handleCreate(event){
  event.preventDefault();
 const name = document.getElementById("name").value;
 const age = document.getElementById("age").value;
 const email = document.getElementById("email").value;

 const newUser = {
   name,
   age,
   email
 };
 const createdUser = await createUser(newUser);
 addUserCard(createdUser);
}

//deletar usuário

export async function handleDelete(event){

 const button = event.target.closest(".delete-btn");
  console.log("BOTÃO:", button);
 const id = Number(button?.dataset.id);

console.log("dataset.id:", button?.dataset.id);
 console.log("id capturado", id);
  if(isNaN(id)) {
    console.error("Id inválido");
  return;
 }

 await deleteUser(id);
 button.closest(".col-md-4")?.remove();
 
}
//botão de edit do card
export function handleEdit(event){

 const card = event.target.closest(".card-body");

 const user = {
   id: event.target.dataset.id,
   name: card.querySelector("h3").textContent,
   age: card.querySelector("p:nth-child(2)").textContent.replace("Age: ",""),
   email: card.querySelector("p:nth-child(3)").textContent.replace("Email: ", "")
 };

 showEditForm(user);

}
export async function handleUpdate(event){
  event.preventDefault();
  const form = document.getElementById("edit-form");
  const id = form.dataset.id;
  console.log("ID:", id);

  const name = document.getElementById("edit-name").value;
  const age = document.getElementById("edit-age").value;
  const email = document.getElementById("edit-email").value;
  const updatedUser = {
    name,
    age,
    email
  };
   await updateUser(id, updatedUser);
   await updateParseUser(id);
   hideEditForm();
    form.reset();
    await loadUsers();
}

//lógica da aplicação