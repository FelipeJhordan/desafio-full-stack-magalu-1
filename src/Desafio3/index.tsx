import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Existem muitos códigos desnecessários.
  Resolva, Refatore o código e simplifique.

  Explicação: Foi removido Fragmentos desnecessários, além de redundância em for, o que pode deixar a página lenta, 
  também foi utilizado a propriedade key.
*/

export const Desafio3 = () => {
  const [list, setList] = useState([1, 2])

  return (
    <div>
      <span> quantidade: {list.length}</span>
      <ul>
        {list.map((item) => (
          <li key={item}>item: {item}</li>
        ))}
      </ul>
    </div>
  )
}
