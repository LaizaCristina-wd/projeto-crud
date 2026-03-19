 export async function getUsers(){
  try {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    console.log(data);
    return data;
  }  
  catch(error){
    console.error("User not found", error);
     return { users: [] }; 
  }
}

export async function createUser(data){
  const response = await fetch("http://localhost:8000/api/users", {
    method: "POST",
    headers: { "Content-Type":"application/json"
     },
    body: JSON.stringify(data)
  });
  return response.json();
}

export async function updateParseUser(data){
  const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
    method: "PATCH",
    headers: { "Content-Type":"application/json"
    },
    body: JSON.stringify(data)
  });
    response.json();
}
export async function updateUser(data){
  const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
    method: "PUT",
    headers: { "Content-Type":"application/json"
    },
    body: JSON.stringify(data),
  });
    response.json();
}

export async function deleteUser(id){
  console.log("ID enviado:", id);

  const response = await fetch(`http://localhost:8000/api/users?id=${id}`, {
    method: "DELETE",
  
  });
   await response.json();
}
//funções fetch