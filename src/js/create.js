const form = document.getElementById("userForm");

form.addEventListener("submit", async(event)=> {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email =document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const user = {
        name: name,
        email: email,
        age: age
    };
const response = await fetch("http://localhost:8000/api/users",{
method: "POST",
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(user)
});
const data = await response.json();

});

const container = document.getElementById("usersList");
function addUserCard(user){
    const card = document.createElement("div");
    card.classList.add("user-card");
    card.dataset.id = user.id;
    card.innerHTML = `
    <h3>${user.name}</h3>
    <p>${user.age}</p>
    <p>${user.email}</p>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    `;
    card.querySelector(".delete-btn").addEventListener("click", async() =>{
        await fetch(`http://localhost:8000/api/users/${user.id}`, {
            method:"DELETE"
        });
        card.remove();
    });
    card.querySelector(".edit-btn").addEventListener("click", ()=>{
        document.getElementById("name").value =user.name;
        document.getElementById("age").value = user.age;
         document.getElementById("email").value = user.email;

        form.onsubmit = async (event)=>{
            event.preventDefault();
            const updateUser = {
                name: document.getElementById("name").value,
                age: document.getElementById("age").value,
                email: document.getElementById("email").value
            };
            const response = await fetch(`http://localhost:8000/api/users/${user.id}`, {
                method: "PUT",
                headers:{ "Content-type": "aplication/json"},
                body: JSON.stringify(updateUser)
            });

            const data = await response.json();
            card.querySelector("h3").textContent = data.user.name;
            card.querySelector("p").textContent = data.user.email;
             card.querySelector("p").textContent = data.user.age;

             form.reset();
             form.onsubmit = createUserSubmit;
        };

    });
}
  container.appendChild(card);