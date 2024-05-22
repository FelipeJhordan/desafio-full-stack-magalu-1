/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:
  No React o retorno de cada componente deve ser apenas um nó pai, apenas um container, onde poderá ou não ter filhos.
  O código anterior estava retornando duas spans, que é dois elementos sem um elemento pai.
  Para contornar isso, pode ser utilizado de uma tag de agrupamento como por exemplo "div" ou utilizar um Fragmento React,
  que é a maneira mais limpa de resolver essa questão;
  Exemplo de Fragmento React:  <> <p> texto </p> </>
*/

export const Desafio1 = ()=> {
  return (
    <>
      <span>item 1</span>
      <span>item 2</span>
    </>
  )
}
