 export async function getUsers(){
  try {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    console.log(data);
    return data;
  }  
  catch(error){
    console.error("User not found", error);
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

export async function updateParseUser(id, data){
  const response = await fetch("http://localhost:8000/api/users?index=0", {
    method: "PATCH",
    headers: { "Content-Type":"application/json"
    },
    body: JSON.stringify(id, data)
  });
    response.json();
}
export async function updateUser(id, data){
  const response = await fetch("http://localhost:8000/api/users?index=0", {
    method: "PUT",
    headers: { "Content-Type":"application/json"
    },
    body: JSON.stringify(id, data),
  });
    response.json();
}

export async function deleteUser(id) {
  try {
    console.log("ID enviado:", id);

    const response = await fetch("http://localhost:8000/api/users?index=0", {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log("Deletado:", data);

  } catch (error) {
    console.error("Erro ao deletar:", error);
  }
}
//funções fetch