import { deleteUser} from "./api.js";
//deletar usuário

export async function handleDelete(event){
  const button = event.target.closest(".delete-btn");
  const id = button.dataset.id;
  

  console.log("id capturado:", id);
  
  try {
    await deleteUser(id); 
   
    const card = button.closest(".user-card");
    if(card){
      card.remove();
    }

  } catch(error){
    console.error("Erro ao deletar:", error);
  }
}
