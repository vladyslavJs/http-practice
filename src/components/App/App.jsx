import UseMemoExample from '../UseMemoExample'
import RefExample from '../RefExample'
import { useRef, useState } from 'react';

export default function App() {
  //Ref це не реактивне значення, зміна Ref не впливає на оновлення компоненту, тобто не форсить рендер, це не probs i не useState.
  // const clicks = useRef();
  const [clicks, setClicks] = useState(0);
  const date = new Date();

  const handelCLick = () => {

  };

  //Це приклад відноситься до Ref
  // const handleClick = () => {
  //   clicks.current += 1;
  //   console.log(handleClick);
  // }
  return (
    <>
      <div>
        <button onClick={handelCLick}>{clicks.current}</button>
        <p>Date: {date.toLocaleTimeString}</p>
      </div>    
      <hr />
      < UseMemoExample />
      <hr />
      < RefExample />
    </>
  );
}

