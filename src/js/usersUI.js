
export function addUserCard(user){

 const container = document.querySelector("#usersList");

 const emptyMessage = container.querySelector(".text-muted");
 if(emptyMessage){
   emptyMessage.remove();
 }


 const card = document.createElement("div");
 card.classList.add("col-md-4");

 card.innerHTML = `
   <h3>${user.name}</h3>
   <p>Age: ${user.age}</p>
   <p>Email: ${user.email}</p>

   <button class="edit-btn" data-id="${user.id}">Edit</button>
   <button class="delete-btn" data-id="${user.id}">Delete</button>
 `;

 container.appendChild(card);
}
//criar os cards visuais de usuarios