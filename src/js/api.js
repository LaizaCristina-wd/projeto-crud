  const urlApi = "http://localhost:8000/api/users"
  export async function getUsers(){
    try {
      const response = await fetch(`${urlApi}`);
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
    const response = await fetch("http://localhost:8000/api/users",
     {
      method: "POST",
      headers: { "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  export async function updateParseUser(fields){
    if (fields.age !== undefined){
      fields.age = Number(fields.age);
    }
    const response = await fetch(`${urlApi}?id=${id}`, {
      method: "PATCH",
      headers: { "Content-Type":"application/json"
      },
      body: JSON.stringify(fields)
    });
      const data = await response.json();
      if(!response.ok){
        throw new Error(
          data.error || "Failed to patch user"
        )
      }
      return data; 
  }

  export async function updateUser(urlApi, id ,{name, age, email}){
    const response = await fetch(`${urlApi}?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type":"application/json"
      },
      body: JSON.stringify({
         name, age: Number(age), email}),
    });
      const data = await response.json();
      if (!response.ok){
        throw new Error(
          data.error || "failed to update user"
        );
      }
      return data;
  }

  export async function deleteUser(id){
    console.log("ID enviado:", id);

    const response = await fetch(`${urlApi}?id=${id}`, {
      method: "DELETE",
    
    });
    await response.json();
  }
  //funções fetch