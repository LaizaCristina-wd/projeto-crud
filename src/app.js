async function loadUsers(){
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    console.log(data.users);

    data.users.array.forEach(user=>{
        addUserCard(user)
    });
}