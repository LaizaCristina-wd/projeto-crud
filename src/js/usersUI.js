export function addUserCard(user){

 const container = document.querySelector("#usersList");
 if(!container){
  return;
 }

 const emptyMessage = container.querySelector(".text-muted");
 if(emptyMessage){
   emptyMessage.remove();
 }


 const card = document.createElement("div");
 card.classList.add("col-md-4", "user-card");
 

 card.innerHTML = `
 <div class="card h-100">
 <div class="card-body">
   <h3>name:${user.name}</h3>
   <p>Age: ${user.age}</p>
   <p>Email: ${user.email}</p>

   <button class="edit-btn btn btn-sm btn-secondary" data-id="${user.id}">Edit</button>
   <button class="delete-btn btn btn-sm btn-danger" data-id="${user.id}">Delete</button>
   </div>
   </div>
 `;

 container.appendChild(card);
}

//criar os cards visuais de usuarios