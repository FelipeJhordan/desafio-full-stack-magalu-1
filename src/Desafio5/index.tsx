import Item  from "./Item";
import { useDesafio5Controller } from "./useDesafio5Controller";

/* TODO
  O componente abaixo está com problemas. Resolva o problema e melhore a performance.

  Obs. considere o componente filho também para resolver esse desafio

  Comentários sobre a sua solução:

  Antes de tudo, para evitar re-render dos componentes é necessário remover o elemento React.StrictMode na raiz da aplicação,
  essa propriedade contêm certos benefícios em dev, porém acaba por fazer o render dos componentes duas vezes, o 
  que compromete nosso desafio.

  O primeiro passo foi utilizar o useRef na função callback que é passada para
  os componentes filhos:
  const parOuImparRef = useRef(parOuImpar);

  Isso tem como objetivo de evitar que os Items sejam montados novamente após a inicialização
  de outro elemento na lista.
  
  Também foi utilizado o useMemo no component de Items, para capturar o valor uma vez e evitar novas renderizações não necessárias,
  foi observado que o useMemo não estava capturando a função callback de verificar se o número é par, provavelmente por se tratar de uma referência.. 
  evitando que somente a solução do Memo fosse suficiente.


    OBS:
    Existe outra solução onde não é necessário remover o elemento React.StrictMode: como por exemplo utilizar o conjunto de useRef com useState 
  para criar uma lógica para verificar se o component já foi renderizado uma vez:
  ```
    const hasLoadedBefore = useRef(true)
  useEffect(()=> {
    if(hasLoadedBefore.current){
      //your initializing code runs only once
      console.log("Effect ran")
      hasLoadedBefore.current = false;
    } else{
      //subsequent renders
    }
  }, [])
  ```
*/

export function Desafio5() {
  const { list, addItem, numero, parOuImpar } = useDesafio5Controller();
  return (
    <>
      <button onClick={addItem}  data-testid="btn1">adiciona + 1 item na lista</button>
      <span data-testid="size">{list.length}</span>
      <ul>
        {list.map((item) => (
          <Item valor={item}  key={item} parOuImpar={parOuImpar.current} />
        ))}
      </ul>
      <p>
      {numero} é  {parOuImpar.current(numero)}
      </p>
    </>
  );
}
