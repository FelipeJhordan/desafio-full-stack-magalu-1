import {useState} from 'react';

/* TODO
  O componente abaixo está com problemas. Existem muitos códigos desnecessários.
  Resolva, Refatore o código e simplifique.
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
