const lista = ["Um", "Dois", "Três"];

export function getLista(){
  return lista;
}

export function limpaLista(){
  lista.splice(0);
}

export function adicionaNaLista(novoItem){
  lista.push(novoItem);
}

export function removeDaLista(posicao){
  if(posicao >= 0 && posicao < lista.length) {
    lista.splice(posicao, 1);
  } else {
    console.error("Invalid position");
  }
}