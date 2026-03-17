import { API_URL } from "./config.js";

 export async function getUsers(){
  const response = await fetch(`${API_URL}/users`);
  return response.json();
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
  return fetch(`${API_URL}/users/${id}`, {
    method: "DELETE"
  });
}
//funções fetch