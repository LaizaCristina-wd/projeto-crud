import { deleteUser } from "./api.js";
import { loadUsers } from "./users.js";
//deletar usuário

export async function handleDelete(event){

 const button = event.target.closest(".delete-btn");

 const id = Number(button?.dataset.id);

console.log("dataset.id:", button?.dataset.id);
 console.log("id capturado", id);


 button.closest(".col-md-4")?.remove();
 try {
    await deleteUser(index);
    await loadUsers();

  } catch (error) {
    console.error("Erro ao deletar:", error);
  }
 
}