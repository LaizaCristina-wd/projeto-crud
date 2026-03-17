import { API_URL } from "./config.js";

 export async function getUsers(){
  try {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    console.log(data);
    return data;
}  
  catch(error){
    console.error("User not found", error);
  }
}


export async function createUser(data){

  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type":"application/json"
     },
    body: JSON.stringify(data)
  });
  return response.json();
}
export async function updateUser(id, data){
  return fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
  });
}
export async function deleteUser(id){
  return fetch(`${API_URL}?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  });

}
//funções fetch