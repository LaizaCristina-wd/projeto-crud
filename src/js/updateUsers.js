import { updateUser, updateParseUser } from "./api.js";
import { hideEditForm, showEditForm } from "./formUI.js";
import { loadUsers } from "../app.js";
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
   await updateUser(updatedUser);
   await updateParseUser(id);
   hideEditForm();
    form.reset();
    await loadUsers()
}

//lógica da aplicação