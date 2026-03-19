import { getUsers, updateUser, updateParseUser } from "./api.js";
import { addUserCard } from "./create.js";
import { hideEditForm, showEditForm } from "./formUI.js";


export async function loadUsers(){
  try {
    const containerUser = document.getElementById("usersList");
 containerUser.innerHTML = "";
 const data = await getUsers();
 data.users.forEach((user,index)=>{
   addUserCard(user, index);
 });
 } catch(error){
  console.error("erro ao carregar usuários", error);
 }
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