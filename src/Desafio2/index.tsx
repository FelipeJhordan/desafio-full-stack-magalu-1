import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  Os items renderizados de acordo com a lista estavam sem um valor de identificação, que é atributo utilizado por uma 
  propriedade do react chamada "key",  esse atributo auxília o processo de re-renderização, pois o react utiliza esse
  valor para identificar se a lista sofreu modificações.

  A resolução desse débito técnico é bem simples, pode-se utilizar a propriedade key em conjunto com um valor da lista.
*/

export const Desafio2 = ()=> {
  const [list, setList] = useState([
    1, 2
  ]);

  return (<ul>{list.map(item => <li key={item}>item: {item}</li>)}</ul>)
}
