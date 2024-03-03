import UseMemoExample from '../UseMemoExample'
import RefExample from '../RefExample'
import Timer from '../Timer'
import { useRef, useState } from 'react';

export default function App() {
  //Ref це не реактивне значення, зміна Ref не впливає на оновлення компоненту, тобто не форсить рендер, це не probs i не useState.
  // const clicks = useRef();

  // Відмінність між звичайною локальною змінною і useRef.
  // Локальна змінна буде створюватисб кожний раз і кожний раз ініціалізуватися,
  // useRef - ініціалізується один раз і зберігає це значення поки ми його самі не змінемо, а по друге він не реактивний
  // const [clicks, setClicks] = useState(0);
  // const date = useRef(new Date());

  // const handelCLick = () => {
  //   setClicks(clicks + 1);
  // };
  //----------------------------------

  //Це приклад відноситься до Ref
  // const handleClick = () => {
  //   clicks.current += 1;
  //   console.log(handleClick);
  // }
  //----------------------------------
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* <div>
        <button onClick={handelCLick}>{clicks}Click</button>
        <p>Date: {date.current.getTime()}</p>
      </div>     */}
      <hr />
      < UseMemoExample />
      <hr />
      < RefExample />
      <hr />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && < Timer />}
      
    </>
  );
}

