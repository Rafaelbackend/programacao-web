function enviarPedido() {
  let mensagem = "🍔 *Pedido - Coyote Lanches*%0A%0A";

  function pegarItens(lista, id) {
    lista.forEach(item => {
      const qtd = document.getElementById(`${id}-${item.nome}`).value;

      if (qtd > 0) {
        mensagem += `${qtd}x ${item.nome}%0A`;
      }
    });
  }

  // itens
  pegarItens(hamburgueres, "hamburgueres");
  pegarItens(hotdogs, "hotdogs");
  pegarItens(bebidas, "bebidas");

  // adicionais
  let adicionaisSelecionados = [];
  document.querySelectorAll("#adicionais input:checked").forEach(el => {
    adicionaisSelecionados.push(el.value);
  });

  if (adicionaisSelecionados.length > 0) {
    mensagem += `%0A➕ Adicionais: ${adicionaisSelecionados.join(", ")}%0A`;
  }

  // endereço
  const endereco = document.getElementById("endereco").value;
  mensagem += `%0A📍 Endereço: ${endereco}%0A`;

  // ✅ TOTAL AGORA NO LUGAR CERTO
  const total = document.getElementById("total").innerText;
  mensagem += `%0A💰 Total: R$ ${total}`;

  // envio
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  window.open(url, "_blank");
}