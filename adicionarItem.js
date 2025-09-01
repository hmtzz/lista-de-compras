function adicionarItem() {
      const input = document.getElementById("itemInput");
      const texto = input.value.trim();
      
      if (texto === "") return; // evita item vazio

      const li = document.createElement("li");
      li.textContent = texto;
      
      // botão de remover
      const btnRemover = document.createElement("button");
      btnRemover.textContent = "Remover";
      btnRemover.onclick = () => li.remove();
      
      li.appendChild(btnRemover);
      document.getElementById("lista").appendChild(li);
      
      input.value = "";
      input.focus();
    }