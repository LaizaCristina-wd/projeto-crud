import { createUser} from "./api.js";

//lógica de criar usuário

 export async function handleCreate(event){
  event.preventDefault();
 const name = document.getElementById("name").value;
 const age = document.getElementById("age").value;
 const email = document.getElementById("email").value;

 const newUser = { name, age, email };
  try {
    await createUser(newUser);
    await loadUsers();
  } catch (error) {
    console.error("Erro ao criar usuário", error);
  }
}
//parte de UI
export function addUserCard(user, index){

 const container = document.querySelector("#usersList");
 if(!container){
  return;
 }

 const emptyMessage = container.querySelector(".text-muted");
 if(emptyMessage){
   emptyMessage.remove();
 }
 console.log("USER", user)
 const card = document.createElement("div");
 card.classList.add("col-md-4", "user-card");
 card.innerHTML = `
 <div class="card h-100">
 <div class="card-body">
   <h3>${user.name}</h3>
   <p>Age: ${user.age}</p>
   <p>Email: ${user.email}</p>

   <button class="edit-btn btn btn-sm btn-secondary" data-id="${index}">Edit</button>
   <button class="delete-btn btn btn-sm btn-danger" data-id="${index}">Delete</button>
   </div>
   </div>
 `;

 container.appendChild(card);
}
